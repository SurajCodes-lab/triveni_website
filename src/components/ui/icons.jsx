/**
 * Centralized Icon Exports
 *
 * This file consolidates all lucide-react icon imports to:
 * 1. Reduce bundle size by avoiding duplicate imports across 90+ files
 * 2. Provide tree-shaking optimization
 * 3. Make icon management easier
 *
 * Usage: import { Phone, MapPin, Clock } from '@/components/ui/icons'
 *
 * Estimated bundle savings: ~50KB
 */

// Most frequently used icons (used in 10+ files)
export {
  Phone,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Users,
  ChevronRight,
  Car,
  CheckCircle,
  Shield,
  MessageCircle,
  Calendar,
} from 'lucide-react';

// Commonly used icons (used in 3-9 files)
export {
  X,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  Plane,
  PhoneCall,
  Navigation,
  Mountain,
  Mail,
  Info,
  Home,
  Heart,
  Fuel,
  Eye,
  Compass,
  Camera,
  Award,
  Check,
  Bus,
  Route,
  Search,
  HelpCircle,
  Coffee,
  Building2,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

// Social media icons
export {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

// Additional commonly needed icons
export {
  Menu,
  Crown,
  Zap,
  BadgeCheck,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  Download,
  Upload,
  Share2,
  Copy,
  Trash2,
  Edit,
  Settings,
  User,
  LogOut,
  LogIn,
  Bell,
  AlertCircle,
  AlertTriangle,
  XCircle,
  MinusCircle,
  PlusCircle,
  Plus,
  Minus,
  Loader2,
  RefreshCw,
  RotateCw,
  Globe,
  Link,
  Image as ImageIcon,
  FileText,
  Folder,
  FolderOpen,
  Filter,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Grid,
  Maximize,
  Minimize,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Sun,
  Moon,
  ThumbsUp,
  ThumbsDown,
  Quote,
  Target,
  Gem,
  Gift,
  DollarSign,
  IndianRupee,
  CreditCard,
  Wallet,
  Receipt,
  Tag,
  Percent,
  Calculator,
  Gauge,
  Timer,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  MapPinned,
  LocateFixed,
  Milestone,
  Signpost,
  ParkingCircle,
  Briefcase,
  GraduationCap,
  Handshake,
  UserCheck,
  UserPlus,
  UserMinus,
  UsersRound,
  Baby,
  Accessibility,
  Headphones,
  Mic,
  Video,
  MonitorPlay,
  Tv,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
  Printer,
  QrCode,
  Barcode,
  Key,
  Lock,
  Unlock,
  ShieldAlert,
  ShieldOff,
  Fingerprint,
  Scan,
} from 'lucide-react';

// Blog layout icons
export {
  BookOpen,
  Backpack,
  Utensils,
  ShoppingBag,
  Hotel,
  Map,
  Castle,
  History,
  Ticket,
  Bookmark,
  ArrowUp,
  ChevronUp,
  Thermometer,
  CloudSun,
  TreePine,
  Flame,
  Scroll,
  Leaf,
  Bird,
  Binoculars,
  Tent,
  Sunrise,
  Waves,
  Wind,
  Droplets,
  Trees,
  Landmark,
} from 'lucide-react';

// Additional icons used across the site (no duplicates from above)
export {
  Package,
  Music,
  Send,
  SearchCheck,
  Banknote,
  CircleDollarSign,
  Armchair,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Cigarette,
  Wine,
  PartyPopper,
  Cake,
  Church,
  Snowflake,
  CloudRain,
  Umbrella,
  Rainbow,
  Star as StarIcon,
  MessageCircleMore,
  Truck,
  MapIcon,
  Building,
  Luggage,
  LocateIcon,
  Navigation2,
  CircleDot,
  HeadphonesIcon,
  MessageSquare,
  ScrollText,
  Scale,
  RotateCcw,
  Languages,
} from 'lucide-react';

// Custom WhatsApp icon to avoid importing react-icons/bs (~200KB) for a single icon
export const WhatsAppIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

// Custom Email icon replacement for react-icons/hi HiOutlineMail
export const OutlineMailIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
  </svg>
);
