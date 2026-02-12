
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onBookAppointment: () => void;
}

// Custom Logo Component (User Provided SVG)
const EverleafLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" className={className}>
    <path fill="#136dec" d="m600.24 212.89c-4.66-26.54-8.32-53.07-11.73-79.61l-1.24-9.96-0.61-4.97-0.15-1.25c-0.05-0.4-0.09-0.87-0.16-1.14l-0.41-1.87c-1.05-4.93-2.93-9.5-5.49-13.49-2.59-3.98-5.77-7.44-9.45-10.1-3.66-2.65-7.66-4.61-11.77-5.72-4.1-1.1-8.25-1.48-12.29-1.09l-18.57 1.7-19.91 1.74q-9.95 0.86-19.91 1.64c-26.54 2.14-53.09 3.99-79.64 5.64-13.27 0.85-26.55 1.58-39.82 2.31l-4.98 0.28-2.49 0.13-0.62 0.03-0.31 0.02-0.11 0.03-0.47 0.1q-0.46 0.1-0.92 0.17c-0.3 0.04-0.61 0.05-0.9 0.18-0.57 0.22-1.16 0.32-1.72 0.51-2.26 0.73-4.23 2.02-6 3.47-1.75 1.48-3.23 3.27-4.3 5.19-1.06 1.94-1.77 3.96-2.09 5.99-0.21 1.01-0.2 2.06-0.23 3.09q0.06 0.4 0.07 0.79l0.01 0.39-0.01 0.2v0.1l0.01 0.26 0.19 4.98 0.64 19.92c0.86 26.55 1.47 53.1 1.97 79.66 0.15 6.63 0.21 13.27 0.31 19.91l0.01 0.31-0.01 0.54-0.03 1.07-0.07 2.16-0.19 4.31c-0.05 1.43-0.24 2.87-0.44 4.3q-0.28 2.15-0.61 4.3c-0.36 2.87-1.15 5.67-1.83 8.49-0.38 1.4-0.67 2.83-1.16 4.19q-0.7 2.07-1.43 4.12c-7.94 21.87-24.06 40.34-44.53 51.3-2.59 1.31-5.19 2.61-7.86 3.76q-4.06 1.58-8.18 3.01-4.19 1.2-8.43 2.22c-2.83 0.61-5.71 1.01-8.58 1.44-1.43 0.23-2.87 0.33-4.31 0.41l-4.32 0.24c-3.42 0.16-4.37 0.09-6.18 0.11l-9.96 0.02-39.83-0.2c-13.28-0.16-26.56-0.24-39.84-0.46l-36.93-0.65q-2.95-0.03-5.74 0.98c-1.87 0.67-3.71 1.68-5.33 3.05-1.63 1.36-3.02 3.04-4.09 4.91-1.06 1.88-1.77 3.95-2.1 6.26l-0.09 0.43-0.05 0.21c-0.01 0.05-0.02 0.06-0.03 0.13l-0.01 0.31-0.08 2.49-0.2 4.98-0.41 9.96-0.83 19.92c-0.63 13.28-1.22 26.56-1.95 39.85-0.67 13.28-1.48 26.56-2.25 39.84-0.86 13.28-1.69 26.56-2.65 39.85q-0.68 9.96-1.46 19.92l-1.26 16.88c-0.09 3.81 0.52 7.7 1.89 11.48 1.37 3.78 3.52 7.4 6.3 10.63 2.77 3.25 6.23 6.01 10.15 8.16l1.48 0.83c0.51 0.23 1.04 0.42 1.56 0.65l1.57 0.67c0.52 0.27 1.09 0.35 1.64 0.54l1.66 0.51c0.28 0.08 0.55 0.19 0.84 0.25l0.86 0.16 1.73 0.35 0.88 0.19c0.16 0.03 0.26 0.07 0.48 0.09l0.62 0.07q19.93 2.06 39.86 4.4c26.57 3.17 53.14 6.61 79.72 11.05-26.54 4.69-53.08 8.37-79.62 11.79q-19.9 2.53-39.81 4.77l-0.62 0.07c-0.19 0.03-0.51 0.04-0.76 0.05l-1.61 0.08-3.24 0.12-1.63 0.04c-0.54 0-1.08-0.05-1.62-0.08l-3.27-0.21c-1.08-0.11-2.19-0.11-3.27-0.32l-3.25-0.54c-1.08-0.19-2.18-0.37-3.26-0.59l-3.21-0.87c-8.56-2.33-16.75-6.36-24.06-11.76-7.3-5.4-13.66-12.25-18.66-20.12-5.03-7.87-8.5-16.86-10.32-26.2l-0.36-1.76c-0.12-0.58-0.17-1.17-0.25-1.76l-0.42-3.55-0.2-1.78-0.15-1.61-0.21-2.49-0.85-9.95q-0.87-9.96-1.64-19.91c-1.09-13.28-2.04-26.55-3.02-39.82-0.9-13.28-1.84-26.55-2.63-39.83-0.85-13.27-1.57-26.54-2.32-39.82l-1.01-19.91-0.5-9.96-0.25-4.98-0.11-2.48-0.01-0.32v-0.49l0.01-1.03 0.02-2.05c0.09-10.95 2.2-22.08 6.28-32.45 4.06-10.39 10.17-19.94 17.71-28.17 7.56-8.22 16.64-15.11 26.76-20.14 10.11-5.03 21.23-8.2 32.49-9.28l4.22-0.31c1.35-0.08 3.08-0.18 3.65-0.18l4.98-0.16 9.96-0.27 19.91-0.52c13.28-0.34 26.56-0.55 39.83-0.84l39.83-0.56 9.96-0.08c1.51-0.01 3.88 0 3.77-0.1q0.33-0.04 0.66-0.04c0.22 0.01 0.44 0.03 0.64-0.06 0.4-0.13 0.83-0.11 1.24-0.21q0.58-0.23 1.2-0.31 0.54-0.31 1.15-0.45c0.37-0.2 0.71-0.43 1.12-0.56 1.47-0.77 2.85-1.85 3.99-3.13 1.15-1.29 2.01-2.77 2.64-4.3q0.11-0.29 0.26-0.57c0.13-0.17 0.09-0.41 0.16-0.6 0.07-0.41 0.35-0.78 0.32-1.22q0.04-0.31 0.12-0.63c0.05-0.2 0.14-0.41 0.1-0.64q0-0.33 0.04-0.66l0.04-0.33 0.03-0.17 0.02-0.09v-0.31c0.04-6.64 0.04-13.28 0.13-19.92 0.25-26.56 0.61-53.12 1.23-79.67l0.46-19.92 0.14-4.98 0.09-1.93 0.12-2.1 0.3-4.18c0.61-5.56 1.6-11.11 3.22-16.49 3.13-10.77 8.25-20.92 14.99-29.71 6.72-8.82 15-16.34 24.33-22.16 9.34-5.81 19.76-9.9 30.52-11.89 2.68-0.49 5.39-0.8 8.09-1.13 1.35-0.19 2.7-0.23 4.05-0.28l4.05-0.11 2.02-0.03h0.51l0.32 0.01 0.62 0.03 2.49 0.1 4.98 0.23c13.28 0.61 26.56 1.23 39.84 1.95 26.57 1.4 53.13 3.01 79.7 4.9q9.96 0.68 19.92 1.46l19.92 1.55 9.97 0.81 4.98 0.41 2.84 0.26 3.47 0.37c9.2 1.14 18.17 3.92 26.18 8.23 8.01 4.31 15.13 9.99 20.88 16.71 5.77 6.69 10.19 14.39 13.03 22.52 2.86 8.13 4.13 16.68 3.82 24.99l-0.13 3.1c-0.01 0.56-0.07 0.92-0.11 1.35l-0.14 1.24-0.56 4.99-1.15 9.96c-3.16 26.57-6.58 53.14-10.99 79.72z"/>
    <path fill="#136dec" d="m480.69 406.2c-3.64 1.95-7.31 3.79-10.91 5.78-3.63 1.91-7.2 3.93-10.75 5.94-7.1 4.05-14.06 8.24-20.82 12.66-6.8 4.37-13.37 9.01-19.75 13.79-3.2 2.38-6.3 4.88-9.4 7.34-3.04 2.55-6.08 5.06-9 7.7-5.88 5.21-11.5 10.64-16.76 16.32-5.22 5.67-10.12 11.4-14.45 17.52l-1.65 2.26c-0.55 0.75-1.04 1.55-1.55 2.32-1.01 1.57-2.08 3.09-3.06 4.65l-2.85 4.76q-0.72 1.17-1.36 2.4l-1.3 2.44-1.3 2.42c-0.42 0.82-0.79 1.66-1.19 2.48-0.78 1.66-1.63 3.27-2.36 4.95l-2.16 5.04c-0.71 1.68-1.3 3.42-1.96 5.12-2.49 6.88-4.71 13.83-6.34 21.02-1.66 7.18-3.11 14.41-4.06 21.84l-0.39 2.77-0.31 2.8-0.62 5.61c-0.34 3.89-0.75 7.76-1.03 11.64-0.24 3.88-0.6 7.74-0.74 11.62l-0.29 5.8c-0.11 1.93-0.13 3.87-0.2 5.8-0.47 15.47-0.24 30.93 0.57 46.66 0.35 7.84 0.86 15.79 1.38 23.77l1.72 24.21c0.57 8.14 1.2 16.35 1.7 24.61l1.62 23.9 0.51 5.79 0.26 2.67 0.13 1.28 0.14 1.2c0.39 3.17 0.87 5.78 1.43 7.77 0.56 2 1.15 3.37 1.76 4.34 0.18 0.22 0.3 0.48 0.46 0.69 0.19 0.19 0.29 0.43 0.48 0.62q0.13 0.14 0.25 0.29c0.08 0.1 0.14 0.2 0.28 0.33 0.24 0.24 0.44 0.51 0.67 0.76 1.87 1.98 4.29 3.58 6.88 4.59 2.6 1.01 5.31 1.43 7.74 1.22l23.77-0.75 24.51-0.66c32.69-0.9 65.37-1.53 98.06-2.06l24.51-0.33 12.26-0.15 1.47-0.02q0.21-0.05 0.41-0.08 0.4-0.06 0.81-0.05c0.29 0.05 0.52-0.1 0.78-0.14q0.38-0.09 0.78-0.11c2-0.46 3.86-1.38 5.53-2.66 1.64-1.29 3.13-2.92 3.97-4.8 0.9-1.85 1.44-3.76 1.53-5.93q0.02-0.2 0.06-0.4v-1.46l-0.01-3.07-0.01-6.13-0.03-12.26 0.16-49.03 0.42-49.03c0.05-2.21-0.01-3.44 0.2-7.58q0.13-2.63 0.33-5.25c0.13-1.74 0.45-3.49 0.7-5.23 0.28-1.73 0.55-3.47 0.89-5.2q0.62-2.57 1.31-5.12c0.82-3.43 2.08-6.73 3.33-10.02q0.47-1.23 0.96-2.45l1.13-2.39q1.14-2.37 2.33-4.72c0.38-0.79 0.83-1.55 1.28-2.3l1.36-2.25c0.92-1.49 1.83-2.98 2.82-4.42q1.55-2.12 3.15-4.2c1.07-1.38 2.11-2.78 3.31-4.04 2.36-2.57 4.67-5.19 7.32-7.46 10.27-9.4 22.64-16.5 35.97-20.56 3.36-0.88 6.73-1.8 10.15-2.4q2.57-0.4 5.14-0.74l2.58-0.33c0.86-0.09 1.72-0.11 2.57-0.16q2.58-0.13 5.16-0.2l1.29-0.03 0.64-0.01h0.42l1.53 0.04 6.13 0.14c16.34 0.33 32.69 0.81 49.03 1.25 16.35 0.47 32.7 1.02 49.04 1.57l12.26 0.46 6.13 0.23 3.07 0.11 0.76 0.03 0.38 0.01h0.15 0.61c3.27 0.19 6.52-0.24 9.69-1.45l0.3-0.09 0.28-0.15 0.57-0.29q0.58-0.26 1.18-0.52 0.53-0.36 1.09-0.68c0.37-0.23 0.8-0.39 1.11-0.7 0.66-0.56 1.49-0.97 2.08-1.62q0.49-0.45 1.03-0.87c0.33-0.3 0.58-0.66 0.9-0.98 2.43-2.62 4.44-5.77 5.47-9.36q0.15-0.68 0.35-1.36l0.22-0.69c0.08-0.22 0.07-0.47 0.11-0.7q0.1-0.72 0.24-1.44l0.07-0.36c0.02-0.15 0.06-0.16 0.07-0.48l0.08-1.54 0.63-12.26 1.34-24.52c1.85-32.69 3.95-65.39 6.35-98.09q1.8-24.52 3.85-49.05l0.25-3.06 0.07-0.77c0.02-0.25 0.05-0.54 0.05-0.69l0.06-1.11 0.16-2.23 0.04-0.56-0.02-0.55-0.05-1.12q-0.04-1.12-0.06-2.26l-0.3-2.24c-0.12-0.74-0.13-1.52-0.33-2.26l-0.53-2.23-0.25-1.13c-0.1-0.37-0.25-0.72-0.37-1.09l-0.76-2.21c-0.2-0.77-0.61-1.43-0.92-2.15l-0.96-2.18-1.19-2.06c-0.42-0.67-0.75-1.43-1.25-2.05l-1.41-1.97c-0.24-0.33-0.45-0.68-0.71-1l-0.8-0.91c-4.19-5-9.61-9.2-15.86-12.11-0.78-0.35-1.6-0.63-2.4-0.95-0.81-0.3-1.61-0.69-2.45-0.92l-2.53-0.7c-0.85-0.24-1.7-0.53-2.58-0.64l-2.63-0.46-1.35-0.23-1.53-0.17-6.13-0.66c-16.36-1.86-32.71-3.68-49.06-5.96 16.33-2.43 32.66-4.41 49-6.41l6.12-0.73 1.54-0.17 1.71-0.11 3.49-0.18c1.17-0.1 2.33-0.01 3.51 0.04l3.53 0.2c1.18 0.08 2.33 0.32 3.51 0.48 1.17 0.2 2.36 0.35 3.53 0.59 9.33 2.02 18.35 6.27 26.14 12.37l1.47 1.14c0.48 0.39 0.92 0.83 1.38 1.24l2.74 2.55c0.95 0.83 1.72 1.81 2.57 2.73l2.5 2.84 2.24 3.05c0.72 1.04 1.53 2.03 2.14 3.15l1.93 3.3c0.31 0.55 0.65 1.1 0.94 1.67l0.81 1.74 1.61 3.52c0.54 1.17 0.89 2.41 1.33 3.63q0.64 1.84 1.24 3.7l0.89 3.79 0.43 1.91 0.21 0.96 0.13 0.97 0.5 3.89 0.23 1.95 0.16 1.61 0.28 3.06q2.28 24.51 4.31 49.01c2.7 32.68 5.1 65.35 7.25 98.03l1.58 24.51 0.74 12.25 0.1 1.54c0.02 0.19 0.01 0.68 0.01 1.04l0.01 1.17q0 2.34-0.05 4.69c-0.02 0.78 0 1.57-0.08 2.35l-0.24 2.35q-0.24 2.35-0.54 4.7c-3.76 25.09-19.57 48.28-42.23 61.05-11.29 6.41-24.2 10.32-37.25 11.15l-2.45 0.17-1.01 0.06-0.76 0.03-3.07 0.14-6.12 0.29-12.26 0.57c-16.34 0.7-32.68 1.41-49.02 2.02-16.34 0.6-32.68 1.23-49.02 1.72l-6.13 0.19-1.53 0.05-0.36 0.01-0.12 0.03-0.24 0.06q-0.48 0.09-0.96 0.14c-0.16 0.02-0.33 0-0.48 0.04q-0.23 0.08-0.45 0.15-0.46 0.13-0.91 0.21-0.12 0.01-0.23 0.03l-0.21 0.1q-0.22 0.1-0.43 0.18-0.43 0.16-0.87 0.26c-2.24 0.94-4.25 2.38-5.89 4.15-0.49 0.37-0.74 0.96-1.16 1.39-0.23 0.2-0.33 0.49-0.49 0.75q-0.23 0.38-0.5 0.73c-0.14 0.26-0.23 0.55-0.37 0.8q-0.1 0.19-0.22 0.38c-0.08 0.12-0.17 0.24-0.19 0.39q-0.13 0.42-0.3 0.8-0.09 0.2-0.2 0.39-0.04 0.21-0.09 0.42c-0.12 0.56-0.39 1.06-0.4 1.64q-0.07 0.42-0.2 0.82c-0.01 0.29 0 0.58-0.03 0.86 0 0.28-0.12 0.55-0.09 0.84q0.05 0.45 0.05 0.88c-0.07-0.07 0.01 2.79 0.05 4.67l0.88 49.03 0.6 49.03 0.09 12.25 0.05 6.13 0.02 3.07v1.59l-0.07 2.66c-0.32 14.17-3.89 28.47-10.4 41.19-6.47 12.76-15.93 23.82-27.26 32.43-11.33 8.58-24.65 14.75-38.68 17.52q-2.64 0.45-5.28 0.84c-1.77 0.25-3.53 0.56-5.3 0.63q-2.65 0.17-5.3 0.28l-2.66 0.1h-1.59l-12.25-0.04-24.52-0.1c-32.69-0.23-65.38-0.56-98.07-1.15l-24.51-0.43-25.27-0.59c-6.94-0.21-13.82-1.21-20.45-2.96-6.63-1.75-13-4.27-19.01-7.42-12.02-6.3-22.62-15.22-30.8-26.14-1.01-1.37-1.98-2.78-2.94-4.19-0.96-1.39-1.89-3-2.8-4.52-0.91-1.54-1.7-3.14-2.52-4.73-0.79-1.59-1.48-3.21-2.19-4.83-2.72-6.5-4.43-13.03-5.49-19.03-1.06-6.02-1.5-11.55-1.73-16.52l-0.08-1.86-0.05-1.78c-0.04-1.21-0.06-2.32-0.06-3.44l-0.03-6.46 0.38-25.12 0.54-24.41c0.31-16.37 0.79-33.08 1.77-50.06 0.49-8.47 1.2-17.03 2.02-25.58 0.48-4.29 0.88-8.56 1.48-12.85l0.85-6.42c0.29-2.13 0.64-4.27 0.96-6.4 1.26-8.55 2.88-17.03 4.62-25.46 0.87-4.21 1.87-8.39 2.8-12.58 0.5-2.11 1.07-4.3 1.62-6.44l0.82-3.22 0.93-3.22c2.38-8.57 5.28-17.11 8.65-25.48 3.32-8.38 7.28-16.6 11.72-24.52 4.41-7.94 9.45-15.55 14.99-22.71l2.08-2.68q1.03-1.35 2.14-2.62l4.4-5.14c1.5-1.67 3.06-3.29 4.6-4.92 0.78-0.8 1.53-1.63 2.33-2.41l2.42-2.32c1.63-1.53 3.18-3.13 4.87-4.57l5.01-4.38c1.66-1.45 3.44-2.76 5.15-4.14 1.73-1.37 3.45-2.73 5.22-3.97 6.96-5.19 14.23-9.84 21.61-14.17 7.39-4.32 14.93-8.27 22.62-11.79 7.68-3.55 15.44-6.79 23.32-9.61 15.75-5.68 31.76-10.16 47.95-13.37z"/>
    <path fill="#9adec9" d="m268.88 509.29q-1.44-4.01-2.71-8.08c-0.85-2.72-1.58-5.47-2.35-8.23q-0.55-2.07-1.04-4.16-0.51-2.09-0.95-4.2l-0.88-4.23-0.78-4.26c-1.99-11.41-2.85-23.15-2.56-35.14 0.27-5.97 0.66-12.03 1.65-18.09 0.4-3.04 1.03-6.06 1.65-9.1 0.28-1.53 0.72-3.03 1.09-4.55 0.4-1.51 0.75-3.04 1.2-4.54 3.54-12.07 8.85-23.99 16.01-35.03l2.82-4.04c0.95-1.35 1.88-2.72 2.94-3.99 2.06-2.56 4.07-5.23 6.35-7.63l3.37-3.67c1.15-1.2 2.36-2.32 3.55-3.48 1.2-1.14 2.39-2.32 3.62-3.43l3.79-3.22c10.18-8.5 21.44-15.54 33.11-21.19 1.46-0.7 2.92-1.46 4.39-2.12l4.44-1.9 4.46-1.88c1.48-0.6 2.93-1.09 4.41-1.64 2.94-1.05 5.88-2.2 8.86-3.15l4.46-1.47c1.48-0.51 3.03-0.89 4.55-1.34l4.59-1.29 4.56-1.14c3.05-0.79 6.06-1.43 9.08-2.1 6.04-1.3 12-2.32 17.91-3.3 23.56-3.74 45.9-5.52 66.08-8.51 2.49-0.4 5-0.78 7.42-1.2l7.01-1.39c1.17-0.23 2.34-0.39 3.5-0.69l3.47-0.83c2.32-0.58 4.64-1.04 6.94-1.69 4.58-1.35 9.18-2.54 13.71-4.11l3.41-1.11 1.7-0.55 1.68-0.64 6.74-2.51c35.83-13.98 69.53-35.74 101.28-61.68l0.49-0.4c17.33-14.16 42.86-11.6 57.03 5.74 5.08 6.22 8 13.47 8.86 20.9l0.31 2.63 0.25 2.29 0.43 4.43q0.4 4.38 0.73 8.69c0.44 5.75 0.74 11.46 0.95 17.17 0.44 11.42 0.59 22.81 0.3 34.23-0.26 11.41-0.84 22.85-1.9 34.3q-0.75 8.59-1.82 17.2c-0.72 5.73-1.59 11.48-2.52 17.22-3.8 22.96-9.57 45.99-18.26 68.66-4.48 11.29-9.51 22.53-15.78 33.39-6.14 10.89-13.43 21.44-21.84 31.27-4.19 4.92-8.78 9.59-13.56 14.07-2.47 2.17-4.86 4.39-7.47 6.44-1.29 1.02-2.53 2.09-3.86 3.07l-4 2.92-1.01 0.73-1.1 0.74-2.21 1.47c-1.46 0.97-2.99 2.03-4.28 2.67l-8.05 4.42c-2.71 1.53-5.34 2.71-7.99 4-2.66 1.25-5.28 2.56-7.95 3.75-21.39 9.43-43.53 16.26-65.95 20.53-22.43 4.18-45.15 5.7-67.49 4.54-22.32-1.23-44.29-5.1-64.9-12.27 21.74-1.72 42.7-5 62.88-10.1 20.17-5.05 39.55-11.76 57.96-19.99 18.37-8.32 35.78-18.1 51.84-29.16 2-1.38 3.94-2.85 5.9-4.27 1.95-1.43 3.98-2.84 5.7-4.29l5.39-4.27c1.01-0.73 1.55-1.37 2.21-2.01l0.97-0.96 0.49-0.47 0.53-0.56c2.88-2.93 5.59-6.04 8.18-9.26 2.52-3.31 4.93-6.72 7.19-10.29 8.95-14.36 15.6-31.04 20.38-48.87 4.82-17.86 7.85-36.79 9.73-56.12 0.44-4.84 0.86-9.69 1.14-14.59 0.31-4.88 0.59-9.78 0.76-14.71 0.18-4.92 0.27-9.86 0.33-14.8q0.11-7.43 0-14.87c-0.18-9.93-0.47-19.88-1.09-29.79q-0.47-7.43-1.06-14.77-0.3-3.67-0.66-7.26l-0.37-3.53-0.37-3.04 66.39 26.24c-18.49 15.16-38.16 29.37-59.46 41.69-5.24 3.18-10.77 5.98-16.2 8.91-2.75 1.42-5.56 2.75-8.33 4.13l-4.18 2.05-4.26 1.92-8.57 3.76-8.74 3.45c-1.46 0.57-2.89 1.18-4.38 1.69l-4.45 1.57c-2.98 1.03-5.91 2.12-8.94 3.03l-9.08 2.7-2.26 0.67-2.3 0.59-4.61 1.17c-3.08 0.74-6.11 1.61-9.24 2.18l-9.34 1.85c-3.11 0.6-6.27 1-9.41 1.5l-4.7 0.7c-1.57 0.26-3.16 0.37-4.74 0.55l-9.48 0.92c-3.09 0.23-6.11 0.4-9.14 0.57-24.05 1.16-46.16 0.32-66.82 0.76-2.55 0.08-5.14 0.12-7.66 0.23-2.49 0.14-5.06 0.21-7.5 0.39-2.47 0.15-4.96 0.28-7.36 0.53l-3.64 0.32-3.56 0.43c-2.37 0.25-4.78 0.63-7.19 1-2.43 0.33-4.8 0.84-7.21 1.25-1.19 0.22-2.43 0.41-3.59 0.66l-3.42 0.8-3.46 0.76c-1.14 0.27-2.23 0.62-3.36 0.92-17.99 4.89-34.3 13.04-47.82 25.61l-2.46 2.44c-0.81 0.83-1.69 1.61-2.43 2.51-1.53 1.75-3.16 3.46-4.59 5.35l-2.23 2.79-2.08 2.94-1.05 1.48q-0.5 0.76-0.98 1.53l-1.98 3.09c-5.09 8.39-9.26 17.73-12.66 27.63-6.69 19.88-9.98 41.83-11.5 64.42z"/>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-primary' : 'text-slate-600 hover:text-primary';

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><span className="material-icons text-base text-primary">phone</span> Emergency: 911</span>
            <span className="flex items-center gap-2 opacity-80"><span className="material-icons text-base">schedule</span> Mon - Sun: 24 Hours</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</Link>
            <span className="opacity-30">|</span>
            <Link to="/blog" className="opacity-80 hover:opacity-100 transition-opacity">News & Media</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <EverleafLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-brand font-semibold text-slate-900 leading-none tracking-tight">Everleaf</span>
                <span className="text-xs font-brand text-slate-500 tracking-[0.2em] uppercase mt-0.5">Medical Center</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link className={`${isActive('/')} font-medium transition-colors`} to="/">Home</Link>
              <Link className={`${isActive('/about')} font-medium transition-colors`} to="/about">About</Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Link to="/services" className={`flex items-center gap-1 cursor-pointer font-medium transition-colors ${location.pathname.includes('services') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                  Services <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 py-2">
                  <Link to="/services/diagnostics" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Diagnostic Services</Link>
                  <Link to="/services/laboratory" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Laboratory</Link>
                  <Link to="/services/imaging" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Imaging</Link>
                  <Link to="/services/pharmacy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Pharmacy</Link>
                  <Link to="/services/emergency" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Emergency Care</Link>
                  <Link to="/services/preventive-checkups" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Preventive Checkups</Link>
                </div>
              </div>

              {/* Departments Dropdown */}
              <div className="relative group">
                <Link to="/departments" className={`flex items-center gap-1 cursor-pointer font-medium transition-colors ${location.pathname.includes('departments') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                  Departments <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 py-2">
                  <Link to="/departments/cardiology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Cardiology</Link>
                  <Link to="/departments/neurology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Neurology</Link>
                  <Link to="/departments/pediatrics" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Pediatrics</Link>
                  <Link to="/departments/surgery" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Surgery</Link>
                  <Link to="/departments/dental" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Dental Clinic</Link>
                  <Link to="/departments/ophthalmology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Ophthalmology</Link>
                  <Link to="/departments/laboratory" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Laboratory</Link>
                  <Link to="/departments/radiology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Radiology</Link>
                  <Link to="/departments/rehabilitation" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Rehabilitation</Link>
                </div>
              </div>
              <Link className={`${isActive('/doctors')} font-medium transition-colors`} to="/doctors">Doctors</Link>
              <Link className={`${isActive('/blog')} font-medium transition-colors`} to="/blog">Articles</Link>
              <Link className={`${isActive('/gallery')} font-medium transition-colors`} to="/gallery">Gallery</Link>
              <Link className={`${isActive('/contact')} font-medium transition-colors`} to="/contact">Contact</Link>
            </div>

            <div className="hidden lg:block">
              <button onClick={onBookAppointment} className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5">
                Book Appointment
                <span className="material-icons text-sm ml-2">arrow_forward</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-primary p-2">
                <span className="material-icons text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-6 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/">Home</Link>
              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/about">About</Link>
              
              {/* Expandable Services Menu */}
              <div className="border-b border-slate-100 pb-2">
                <div 
                  className="flex justify-between items-center text-slate-800 font-bold cursor-pointer py-2"
                  onClick={() => toggleMobileSubmenu('services')}
                >
                  <span>Services</span>
                  <span className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === 'services' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'services' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-slate-100 space-y-3">
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services">All Services</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/diagnostics">Diagnostics</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/laboratory">Laboratory</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/imaging">Imaging</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/pharmacy">Pharmacy</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/emergency">Emergency</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/services/preventive-checkups">Checkups</Link>
                  </div>
                </div>
              </div>

              {/* Expandable Departments Menu */}
              <div className="border-b border-slate-100 pb-2">
                <div 
                  className="flex justify-between items-center text-slate-800 font-bold cursor-pointer py-2"
                  onClick={() => toggleMobileSubmenu('departments')}
                >
                  <span>Departments</span>
                  <span className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === 'departments' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'departments' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-slate-100 space-y-3">
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments">All Departments</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments/cardiology">Cardiology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments/neurology">Neurology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments/pediatrics">Pediatrics</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments/surgery">Surgery</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="block text-slate-600 text-sm hover:text-primary" to="/departments/dental">Dental</Link>
                  </div>
                </div>
              </div>

              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/doctors">Doctors</Link>
              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/blog">Articles</Link>
              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/gallery">Gallery</Link>
              <Link onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium" to="/contact">Contact</Link>
              <button onClick={() => {onBookAppointment(); setIsMenuOpen(false);}} className="w-full text-center py-3 text-white bg-primary rounded-lg font-bold">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
