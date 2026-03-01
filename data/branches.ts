// Minimal branch registry.
// Display data (name, address, hours, etc.) is handled in i18n locales
// under the `data.branches` key.

export interface BranchInfo {
  id: string; // Matches GeoJSON description and i18n keys
}

export const branchData: BranchInfo[] = [
  { id: "Bole Branch" },
  { id: "ECA Branch" },
  { id: "Namiba Branch" },
  { id: "Kotebe Branch" },
];
