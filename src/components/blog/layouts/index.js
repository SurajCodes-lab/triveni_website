// Blog Layout Components Index
// Each layout is designed for a specific type of attraction

export { default as FortPalaceLayout } from './FortPalaceLayout';
export { default as TempleLayout } from './TempleLayout';
export { default as NatureLayout } from './NatureLayout';
export { default as MonumentLayout } from './MonumentLayout';
export { default as CityGuideLayout } from './CityGuideLayout';
export { default as AdventureLayout } from './AdventureLayout';

// Layout selector based on attraction type
export const getLayoutComponent = (attractionType) => {
  const layoutMap = {
    // Forts & Palaces
    'fort': 'FortPalaceLayout',
    'palace': 'FortPalaceLayout',
    'haveli': 'FortPalaceLayout',

    // Religious Sites
    'temple': 'TempleLayout',
    'mosque': 'TempleLayout',
    'gurudwara': 'TempleLayout',
    'church': 'TempleLayout',
    'dargah': 'TempleLayout',
    'religious': 'TempleLayout',

    // Nature & Outdoors
    'nature': 'NatureLayout',
    'hill-station': 'NatureLayout',
    'lake': 'NatureLayout',
    'waterfall': 'NatureLayout',
    'wildlife': 'NatureLayout',
    'national-park': 'NatureLayout',
    'garden': 'NatureLayout',
    'beach': 'NatureLayout',

    // Monuments & Heritage
    'monument': 'MonumentLayout',
    'unesco': 'MonumentLayout',
    'historical': 'MonumentLayout',
    'memorial': 'MonumentLayout',
    'museum': 'MonumentLayout',

    // City Guides
    'city': 'CityGuideLayout',
    'market': 'CityGuideLayout',
    'shopping': 'CityGuideLayout',
    'urban': 'CityGuideLayout',

    // Adventure
    'adventure': 'AdventureLayout',
    'trek': 'AdventureLayout',
    'rafting': 'AdventureLayout',
    'camping': 'AdventureLayout',
    'sports': 'AdventureLayout',
  };

  return layoutMap[attractionType?.toLowerCase()] || 'MonumentLayout';
};

// Get all available layout types
export const getAvailableLayouts = () => [
  { id: 'FortPalaceLayout', name: 'Fort & Palace', types: ['fort', 'palace', 'haveli'] },
  { id: 'TempleLayout', name: 'Temple & Religious', types: ['temple', 'mosque', 'gurudwara', 'church', 'dargah'] },
  { id: 'NatureLayout', name: 'Nature & Hills', types: ['nature', 'hill-station', 'lake', 'waterfall', 'wildlife'] },
  { id: 'MonumentLayout', name: 'Monument & UNESCO', types: ['monument', 'unesco', 'historical', 'memorial'] },
  { id: 'CityGuideLayout', name: 'City Guide', types: ['city', 'market', 'shopping'] },
  { id: 'AdventureLayout', name: 'Adventure', types: ['adventure', 'trek', 'rafting', 'camping'] },
];
