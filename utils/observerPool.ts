type Callback = (inView: boolean) => void;

interface ObserverEntry {
  observer: IntersectionObserver;
  elements: Map<Element, Callback>;
}

const observers = new Map<string, ObserverEntry>();

function getKey(options: IntersectionObserverInit) {
  return `${options.rootMargin || "0px"}-${options.threshold || 0}`;
}

/**
 * Shared IntersectionObserver pool.
 * Instead of creating one observer per element, we create one per unique configuration.
 * This significantly reduces CPU and memory usage on pages with many reveal animations.
 */
export function observe(
  element: Element,
  callback: Callback,
  options: IntersectionObserverInit,
) {
  const key = getKey(options);

  let entry = observers.get(key);

  if (!entry) {
    const elements = new Map<Element, Callback>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cb = elements.get(entry.target);
        if (cb) cb(entry.isIntersecting);
      });
    }, options);

    entry = { observer, elements };
    observers.set(key, entry);
  }

  entry.elements.set(element, callback);
  entry.observer.observe(element);
}

export function unobserve(element: Element, options: IntersectionObserverInit) {
  const key = getKey(options);
  const entry = observers.get(key);

  if (!entry) return;

  entry.observer.unobserve(element);
  entry.elements.delete(element);

  // Clean up observer if no elements are left
  if (entry.elements.size === 0) {
    entry.observer.disconnect();
    observers.delete(key);
  }
}
