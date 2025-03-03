// src/utils/api.ts

export const fetcher = (url: string, options: any) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...options,
    }).then(res => res.json());