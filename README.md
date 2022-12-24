# Netflix Recreation

Side project that recreate a partial Netlix experience.

## Key Parts

- **Movie Row Card hover trap**, activated when hovering over the card.  It renders in a separate DOM sub tree. It is also debounced to avoid unintentional spawn. [code - start from MoviesRow.tsx](https://github.com/tresorama/test-netflix-recreation/tree/main/src/views/Browse/components/MoviesRow)

## Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **TMDB** -  movies database API
- **jotai** - micro frontend state
- **framer-motion** - animation library
- **react-youtube** - trailer player
