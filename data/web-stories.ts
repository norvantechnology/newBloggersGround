import { WebStory } from './schema';

export const webStories: WebStory[] = [
  {
    id: 1,
    title: "10 Breathtaking Travel Destinations for 2023",
    slug: "breathtaking-travel-destinations-2023",
    excerpt: "Discover stunning locations that should be on your travel bucket list this year.",
    coverImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categoryId: 4,
    userId: 4,
    createdAt: "2023-01-15T08:30:00Z",
    category: "Travel",
    author: {
      id: 4,
      name: "Emily Chen",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    slides: [
      {
        id: 1,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Discover 10 Breathtaking Travel Destinations for 2023",
        content: "From hidden gems to popular hotspots, these are the places that should be on your travel radar this year.",
        order: 1
      },
      {
        id: 2,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "1. Santorini, Greece",
        content: "Known for its stunning blue and white architecture and incredible sunsets over the caldera.",
        order: 2
      },
      {
        id: 3,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        heading: "2. Kyoto, Japan",
        content: "Experience traditional Japanese culture among ancient temples and breathtaking cherry blossoms.",
        order: 3
      },
      {
        id: 4,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        heading: "3. Banff National Park, Canada",
        content: "Discover turquoise lakes, snow-capped mountains, and abundant wildlife in this natural paradise.",
        order: 4
      },
      {
        id: 5,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "4. Bali, Indonesia",
        content: "Experience the perfect blend of beautiful beaches, spiritual temples, and lush rice terraces.",
        order: 5
      },
      {
        id: 6,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        heading: "5. Barcelona, Spain",
        content: "Gaudi's architectural wonders, vibrant street life, and delicious cuisine make this city unforgettable.",
        order: 6
      },
      {
        id: 7,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1565861605867-61e8c23f444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        heading: "6. Cape Town, South Africa",
        content: "Dramatic landscapes meet vibrant culture beneath the iconic Table Mountain.",
        order: 7
      },
      {
        id: 8,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1542082873-c1d2de9d19c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        heading: "7. Marrakech, Morocco",
        content: "Get lost in the vibrant colors, exotic scents, and rich culture of this ancient city.",
        order: 8
      },
      {
        id: 9,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
        heading: "8. New Zealand",
        content: "From glaciers to geothermal pools, mountains to beaches - nature at its most diverse and spectacular.",
        order: 9
      },
      {
        id: 10,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1509607545598-274eef47d044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "9. Rome, Italy",
        content: "Ancient ruins, world-class art, and incredible food make the Eternal City a timeless destination.",
        order: 10
      },
      {
        id: 11,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        heading: "10. Petra, Jordan",
        content: "This ancient city carved into rose-colored stone is truly one of the world's most awe-inspiring sights.",
        order: 11
      },
      {
        id: 12,
        storyId: 1,
        imageUrl: "https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        heading: "Start Planning Your 2023 Adventures",
        content: "Which of these breathtaking destinations will you visit first? The world is waiting to be explored!",
        order: 12
      }
    ]
  },
  {
    id: 2,
    title: "A Day in the Life of a Professional Photographer",
    slug: "day-in-life-professional-photographer",
    excerpt: "Follow along as wildlife photographer James Wilson captures nature's most breathtaking moments.",
    coverImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    categoryId: 6,
    userId: 1,
    createdAt: "2023-01-20T15:45:00Z",
    category: "Photography",
    author: {
      id: 1,
      name: "Alex Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    slides: [
      {
        id: 13,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
        heading: "A Day in the Life of a Professional Photographer",
        content: "Follow along as wildlife photographer James Wilson captures nature's most breathtaking moments.",
        order: 1
      },
      {
        id: 14,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "4:30 AM: Rise and Prepare",
        content: "The day begins before sunrise. Every piece of equipment is checked and packed methodically.",
        order: 2
      },
      {
        id: 15,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1547036512-2cb226c7e9b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
        heading: "5:15 AM: Journey to Location",
        content: "Traveling to remote locations often involves challenging terrain and weather conditions.",
        order: 3
      },
      {
        id: 16,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1614602638662-c7c1f55c33f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "6:00 AM: Setting Up",
        content: "Finding the perfect spot and setting up equipment requires patience and environmental awareness.",
        order: 4
      },
      {
        id: 17,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        heading: "6:30 AM: The Golden Hour",
        content: "The first light of day creates magical conditions for photography. Every second counts.",
        order: 5
      },
      {
        id: 18,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "10:00 AM: Changing Locations",
        content: "As the light changes, photographers must adapt and sometimes move to new locations quickly.",
        order: 6
      },
      {
        id: 19,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1581299894341-367e6517569c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        heading: "12:00 PM: Midday Break",
        content: "When the harsh midday light makes shooting difficult, it's time to review morning shots and plan for the afternoon.",
        order: 7
      },
      {
        id: 20,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
        heading: "4:00 PM: Back in Action",
        content: "As the day cools and the light softens, it's time to capture the changing mood of the landscape.",
        order: 8
      },
      {
        id: 21,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1574068600272-d8fad6e12c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "6:00 PM: The Magic Hour Returns",
        content: "The evening golden hour provides another window of perfect lighting conditions.",
        order: 9
      },
      {
        id: 22,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "8:00 PM: Packing Up",
        content: "After a long day, equipment is carefully packed and protected for the journey home.",
        order: 10
      },
      {
        id: 23,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1603380781200-93a277c6933f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "10:00 PM: Reviewing the Day's Work",
        content: "Back at home or in a hotel, the day's photos are backed up and quickly reviewed.",
        order: 11
      },
      {
        id: 24,
        storyId: 2,
        imageUrl: "https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "The Photographer's Life",
        content: "It's exhausting but rewarding. Tomorrow, we'll do it all again, chasing perfect moments one frame at a time.",
        order: 12
      }
    ]
  },
  {
    id: 3,
    title: "5 Revolutionary Tech Gadgets of 2023",
    slug: "revolutionary-tech-gadgets-2023",
    excerpt: "Explore the cutting-edge devices that are changing how we interact with technology in our daily lives.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    categoryId: 1,
    userId: 1,
    createdAt: "2023-01-25T12:30:00Z",
    category: "Technology",
    author: {
      id: 1,
      name: "Alex Thompson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    slides: [
      {
        id: 25,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "5 Revolutionary Tech Gadgets of 2023",
        content: "Explore the cutting-edge devices that are changing how we interact with technology in our daily lives.",
        order: 1
      },
      {
        id: 26,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "1. NeuroSync Brain-Computer Interface",
        content: "This groundbreaking wearable allows users to control digital devices using only their thoughts.",
        order: 2
      },
      {
        id: 27,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1676461792835-59290760fbfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80",
        heading: "What Makes NeuroSync Revolutionary",
        content: "Non-invasive sensors detect neural patterns which are translated into digital commands with 95% accuracy.",
        order: 3
      },
      {
        id: 28,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1656077217715-d4bdcf4008f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        heading: "2. HoloLens Reality Mixer",
        content: "The next generation of mixed reality glasses that seamlessly blend digital content with the physical world.",
        order: 4
      },
      {
        id: 29,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1626304495233-9844a1b6806c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "HoloLens Applications",
        content: "From architectural visualization to medical training, these glasses are transforming professional fields.",
        order: 5
      },
      {
        id: 30,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
        heading: "3. EcoCharge Biological Battery",
        content: "The world's first commercially viable battery that uses biological processes to generate and store electricity.",
        order: 6
      },
      {
        id: 31,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80",
        heading: "EcoCharge Innovation",
        content: "Using engineered bacteria that generate electricity, these batteries are 100% biodegradable and last twice as long as conventional ones.",
        order: 7
      },
      {
        id: 32,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "4. QuantumSecure Encryption Device",
        content: "A pocket-sized quantum computing processor dedicated to unbreakable encryption for personal communications.",
        order: 8
      },
      {
        id: 33,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "Why QuantumSecure Matters",
        content: "In an age of data breaches, this device ensures that your personal communications remain truly private.",
        order: 9
      },
      {
        id: 34,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
        heading: "5. NanoMed Health Scanner",
        content: "This handheld device can detect early signs of disease through non-invasive scanning of biological markers.",
        order: 10
      },
      {
        id: 35,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1576671414121-aa2d820d234a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        heading: "NanoMed's Potential",
        content: "By democratizing advanced health diagnostics, this technology could revolutionize preventative healthcare worldwide.",
        order: 11
      },
      {
        id: 36,
        storyId: 3,
        imageUrl: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "The Future is Here",
        content: "These five technologies represent just the beginning of a new era of innovation that will transform how we live, work, and connect.",
        order: 12
      }
    ]
  },
  {
    id: 4,
    title: "The Complete Guide to Mindful Meditation",
    slug: "complete-guide-mindful-meditation",
    excerpt: "Learn the fundamentals of meditation with this step-by-step visual guide to cultivating mental clarity and emotional balance.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1499&q=80",
    categoryId: 5,
    userId: 5,
    createdAt: "2023-01-30T09:15:00Z",
    category: "Health",
    author: {
      id: 5,
      name: "Dr. James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    slides: [
      {
        id: 37,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1499&q=80",
        heading: "The Complete Guide to Mindful Meditation",
        content: "Learn the fundamentals of meditation with this step-by-step visual guide to cultivating mental clarity and emotional balance.",
        order: 1
      },
      {
        id: 38,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "What is Mindful Meditation?",
        content: "Mindfulness meditation is the practice of intentionally focusing on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations.",
        order: 2
      },
      {
        id: 39,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1574894078563-01acbee26fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "The Science Behind Meditation",
        content: "Research shows that regular meditation physically changes the brain, increasing gray matter in areas related to memory, empathy, and stress regulation.",
        order: 3
      },
      {
        id: 40,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "Step 1: Find Your Space",
        content: "Create a quiet, comfortable environment with minimal distractions. This could be a dedicated corner in your home or any peaceful setting.",
        order: 4
      },
      {
        id: 41,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1353&q=80",
        heading: "Step 2: Find Your Posture",
        content: "Sit with your back straight, either on the floor or in a chair. Your posture should be alert yet relaxed, with your hands resting comfortably on your lap or knees.",
        order: 5
      },
      {
        id: 42,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Step 3: Focus on Your Breath",
        content: "Close your eyes and bring your attention to your breathing. Notice the sensation of air moving in and out of your body.",
        order: 6
      },
      {
        id: 43,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Step 4: Notice When Your Mind Wanders",
        content: "It's natural for thoughts to arise. When you notice your mind has wandered, gently bring your attention back to your breath without judgment.",
        order: 7
      },
      {
        id: 44,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Step 5: Develop a Regular Practice",
        content: "Start with just 5 minutes daily and gradually increase. Consistency is more important than duration.",
        order: 8
      },
      {
        id: 45,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1610466025839-ec6040c347ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Common Challenges: Restlessness",
        content: "If you feel restless or impatient, acknowledge these feelings without judgment and return to focusing on your breath.",
        order: 9
      },
      {
        id: 46,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1611800065908-233b597db552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "Common Challenges: Sleepiness",
        content: "If you become drowsy, try opening your eyes slightly, sitting up straighter, or meditating at a different time of day.",
        order: 10
      },
      {
        id: 47,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        heading: "Beyond Basic Meditation",
        content: "As your practice develops, explore other forms like loving-kindness meditation, body scan, or walking meditation.",
        order: 11
      },
      {
        id: 48,
        storyId: 4,
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80",
        heading: "Remember: Meditation is a Journey",
        content: "There is no 'perfect' meditation. Each session is valuable, regardless of how focused you were. The benefits come from the practice itself.",
        order: 12
      }
    ]
  },
  {
    id: 5,
    title: "Spring/Summer Fashion Trends 2023",
    slug: "spring-summer-fashion-trends-2023",
    excerpt: "Discover the colors, patterns, and styles that will dominate the fashion landscape this season.",
    coverImage: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80",
    categoryId: 2,
    userId: 2,
    createdAt: "2023-02-05T14:20:00Z",
    category: "Fashion",
    author: {
      id: 2,
      name: "Sophia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    slides: [
      {
        id: 49,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80",
        heading: "Spring/Summer Fashion Trends 2023",
        content: "Discover the colors, patterns, and styles that will dominate the fashion landscape this season.",
        order: 1
      },
      {
        id: 50,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
        heading: "Trend 1: Vibrant Dopamine Dressing",
        content: "Bold, mood-boosting colors dominate this season, with electric blues, vibrant pinks, and sunny yellows taking center stage.",
        order: 2
      },
      {
        id: 51,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80",
        heading: "How to Style: Dopamine Dressing",
        content: "For maximum impact, try color blocking with contrasting bright hues, or make a statement with a single vibrant piece against neutral basics.",
        order: 3
      },
      {
        id: 52,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
        heading: "Trend 2: Sheer Layers",
        content: "Translucent fabrics and delicate layering create ethereal looks that are both daring and sophisticated.",
        order: 4
      },
      {
        id: 53,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        heading: "How to Style: Sheer Layers",
        content: "Balance is key: pair sheer tops with structured bottoms, or layer over simple slips and bodysuits for everyday wearability.",
        order: 5
      },
      {
        id: 54,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
        heading: "Trend 3: Sustainable Statement Pieces",
        content: "Eco-conscious fashion takes center stage with bold, handcrafted items made from recycled or responsibly sourced materials.",
        order: 6
      },
      {
        id: 55,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80",
        heading: "How to Style: Sustainable Fashion",
        content: "Invest in fewer, higher-quality pieces that showcase artistic details like visible mending, patchwork, or natural dyes.",
        order: 7
      },
      {
        id: 56,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1588453305778-d0641d38354c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1306&q=80",
        heading: "Trend 4: Oversized Proportions",
        content: "Voluminous silhouettes continue to reign, with oversized blazers, wide-leg pants, and billowy dresses offering both comfort and style.",
        order: 8
      },
      {
        id: 57,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "How to Style: Oversized Pieces",
        content: "Balance is crucial: pair loose items with something fitted, such as an oversized blazer with slim trousers or a voluminous dress with structured accessories.",
        order: 9
      },
      {
        id: 58,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1559127502-0b6233d693a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        heading: "Trend 5: Y2K Nostalgia",
        content: "The early 2000s revival continues with low-rise jeans, mini skirts, butterflies, and metallic accents making a strong comeback.",
        order: 10
      },
      {
        id: 59,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        heading: "How to Style: Y2K Fashion",
        content: "For a modern take, incorporate just one or two Y2K elements into your outfit rather than recreating the era head-to-toe.",
        order: 11
      },
      {
        id: 60,
        storyId: 5,
        imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        heading: "The Key to 2023 Style",
        content: "This season is all about personal expression. Mix trends that speak to you, prioritize comfort, and don't be afraid to make bold choices.",
        order: 12
      }
    ]
  }
];