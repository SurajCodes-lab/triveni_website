// Blog Layout Components Index
// Each layout is designed for a specific type of attraction

export { default as FortPalaceLayout } from './FortPalaceLayout';
export { default as TempleLayout } from './TempleLayout';
export { default as NatureLayout } from './NatureLayout';
export { default as MonumentLayout } from './MonumentLayout';
export { default as CityGuideLayout } from './CityGuideLayout';
export { default as AdventureLayout } from './AdventureLayout';
export { default as MagazineLayout } from './MagazineLayout';
export { default as TimelineLayout } from './TimelineLayout';
export { default as FullWidthLayout } from './FullWidthLayout';
export { default as SplitScreenLayout } from './SplitScreenLayout';
export { default as MinimalLayout } from './MinimalLayout';
export { default as ModernCardLayout } from './ModernCardLayout';

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
    'pilgrimage': 'TempleLayout',

    // Nature & Outdoors
    'nature': 'NatureLayout',
    'hill-station': 'NatureLayout',
    'hill station': 'NatureLayout',
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
    'heritage': 'MonumentLayout',

    // City Guides
    'city': 'CityGuideLayout',
    'city guide': 'CityGuideLayout',
    'market': 'CityGuideLayout',
    'shopping': 'CityGuideLayout',
    'urban': 'CityGuideLayout',
    'food': 'CityGuideLayout',

    // Adventure
    'adventure': 'AdventureLayout',
    'trek': 'AdventureLayout',
    'trekking': 'AdventureLayout',
    'rafting': 'AdventureLayout',
    'camping': 'AdventureLayout',
    'sports': 'AdventureLayout',

    // Magazine style for destinations
    'destinations': 'MagazineLayout',
    'travel tips': 'MagazineLayout',

    // Timeline for historical/heritage content
    'history': 'TimelineLayout',
    'ancient': 'TimelineLayout',

    // Full width for vehicle/seasonal content
    'vehicle guide': 'FullWidthLayout',
    'seasonal travel': 'FullWidthLayout',
    'seasonal': 'FullWidthLayout',

    // Split screen for special interest
    'special interest': 'SplitScreenLayout',

    // Minimal layout for clean content
    'tips': 'MinimalLayout',
    'guide': 'MinimalLayout',
    'how-to': 'MinimalLayout',

    // Modern card for vibrant content
    'beach': 'ModernCardLayout',
    'honeymoon': 'ModernCardLayout',
    'luxury': 'ModernCardLayout',
    'romantic': 'ModernCardLayout',
  };

  return layoutMap[attractionType?.toLowerCase()] || 'MonumentLayout';
};

// Get all available layout types
export const getAvailableLayouts = () => [
  { id: 'FortPalaceLayout', name: 'Fort & Palace', types: ['fort', 'palace', 'haveli'] },
  { id: 'TempleLayout', name: 'Temple & Religious', types: ['temple', 'mosque', 'gurudwara', 'church', 'dargah', 'pilgrimage'] },
  { id: 'NatureLayout', name: 'Nature & Hills', types: ['nature', 'hill-station', 'lake', 'waterfall', 'wildlife'] },
  { id: 'MonumentLayout', name: 'Monument & UNESCO', types: ['monument', 'unesco', 'historical', 'memorial', 'heritage'] },
  { id: 'CityGuideLayout', name: 'City Guide', types: ['city', 'market', 'shopping', 'food'] },
  { id: 'AdventureLayout', name: 'Adventure', types: ['adventure', 'trek', 'rafting', 'camping'] },
  { id: 'MagazineLayout', name: 'Magazine Style', types: ['destinations', 'travel tips'] },
  { id: 'TimelineLayout', name: 'Timeline', types: ['history', 'ancient'] },
  { id: 'FullWidthLayout', name: 'Full Width', types: ['vehicle guide', 'seasonal travel'] },
  { id: 'SplitScreenLayout', name: 'Split Screen', types: ['special interest'] },
  { id: 'MinimalLayout', name: 'Minimal Clean', types: ['tips', 'guide', 'how-to'] },
  { id: 'ModernCardLayout', name: 'Modern Card', types: ['beach', 'honeymoon', 'luxury', 'romantic'] },
];
