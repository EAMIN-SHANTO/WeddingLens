# WeddingLens - Photography Equipment Marketplace

WeddingLens is a comprehensive marketplace platform for photographers in Bangladesh. It allows photographers to rent equipment from each other and helps clients find verified, top-rated wedding photographers.

## Features

### MVP Features (Implemented)
- **Photographer & Renter Profiles**: Complete profile system with portfolio and NID verification
- **Equipment Listings**: Browse and search photography equipment with photos, specs, and availability
- **Booking System**: Request, accept, and pay for equipment rentals
- **Payment Integration**: Support for card, bKash, and bank transfers with escrow protection
- **Ratings & Reviews**: Rate photographers and equipment with verified reviews
- **Top Photographers Algorithm**: Curated list of verified top wedding photographers
- **KYC Verification**: Manual upload and admin review system
- **Admin Dashboard**: Comprehensive management of listings, verifications, and disputes
- **Messaging System**: Real-time communication between users
- **Responsive Design**: Mobile-friendly interface

### Key Pages
- **Homepage**: Hero section, featured equipment, top photographers
- **Browse Equipment**: Advanced filtering and search for photography gear
- **Photographers**: Directory of verified wedding photographers
- **Booking**: Complete rental booking system with payment
- **Messages**: Chat system for user communication
- **Admin Dashboard**: Platform management and verification tools

## Technology Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WeddingLens
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── browse-equipment/  # Equipment browsing
│   ├── photographers/     # Photographer directory
│   ├── book-equipment/    # Booking system
│   ├── messages/          # Messaging system
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
└── components/            # Reusable components
    ├── Header.tsx
    ├── Hero.tsx
    ├── FeaturedEquipment.tsx
    ├── TopPhotographers.tsx
    ├── HowItWorks.tsx
    └── Footer.tsx
```

## Design System

### Colors
- **Primary**: Orange-based palette for main actions and branding
- **Secondary**: Slate-based palette for text and neutral elements
- **Accent**: Green for success states, Red for errors

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading structure with responsive sizing

### Components
- Consistent button styles and states
- Card-based layouts for equipment and photographers
- Modal and overlay patterns for booking flows

## Features in Detail

### Equipment Rental System
- Advanced filtering by category, location, price, availability
- Detailed equipment specifications and included items
- Calendar-based availability checking
- Insurance options (basic/premium)
- Delivery method selection (pickup/delivery)

### Photographer Directory
- Verified photographer profiles with portfolios
- Specialization-based filtering (wedding, portrait, etc.)
- Rating and review system
- Price range and location filtering
- Direct booking and messaging capabilities

### Admin Dashboard
- User management and verification
- Equipment listing moderation
- Booking and payment monitoring
- Dispute resolution tools
- Platform analytics and reporting

### Security & Trust
- NID-based verification system
- Escrow payment protection
- Rating and review validation
- Admin oversight and dispute resolution

## Future Enhancements (Phase 2)

- Native mobile applications (iOS/Android)
- Advanced ID verification API integration
- Full insurance partner integration
- Real-time chat with file sharing
- Video call integration for consultations
- Advanced analytics and reporting
- Multi-language support (Bengali/English)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Email: support@weddinglens.com
- Phone: +880-XXX-XXXXXX
- Website: [www.weddinglens.com](https://www.weddinglens.com)

---

Made with ❤️ for the Bangladesh photography community