import { WebStory } from './schema';

export const webStories: WebStory[] = [
  {
    id: 1,
    title: '10 Revolutionary AI Tools You Need to Try in 2023',
    slug: 'revolutionary-ai-tools-2023',
    excerpt: 'Discover the AI tools that are changing how we work, create, and solve problems.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    categoryId: 1,
    userId: 1,
    createdAt: '2023-08-10T10:00:00.000Z',
    category: 'Technology',
    author: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    slides: [
      {
        id: 1,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        heading: '10 Revolutionary AI Tools',
        content: 'Artificial Intelligence is transforming every industry. Here are the tools you need to know about in 2023.',
        order: 1
      },
      {
        id: 2,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1595514535215-49aab16293fc',
        heading: '1. ChatGPT',
        content: 'OpenAI\'s language model can write content, answer questions, and even code. It\'s changing how we think about AI assistance.',
        order: 2
      },
      {
        id: 3,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1681078578169-3e281a609a7f',
        heading: '2. DALL-E 2',
        content: 'Create stunning images from text descriptions. This AI art generator is revolutionizing visual content creation.',
        order: 3
      },
      {
        id: 4,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1655721530791-59f5d3459908',
        heading: '3. Jasper',
        content: 'An AI content platform designed specifically for marketing teams to create high-converting copy.',
        order: 4
      },
      {
        id: 5,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1637611331610-5d20a89a4981',
        heading: '4. Lensa',
        content: 'Transform your selfies into artistic portraits with this AI-powered photo editing app.',
        order: 5
      },
      {
        id: 6,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1679958157996-64a8277bb7c3',
        heading: '5. Notion AI',
        content: 'Supercharge your notes and documents with AI writing assistance integrated directly into Notion.',
        order: 6
      },
      {
        id: 7,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1671267879606-9d4c96617517',
        heading: '6. Midjourney',
        content: 'Create unique, dreamlike artwork based on text prompts with this popular AI visualization tool.',
        order: 7
      },
      {
        id: 8,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1680262398573-2260a4b21deb',
        heading: '7. Runway ML',
        content: 'Edit videos with AI, removing objects, changing backgrounds, and more with minimal effort.',
        order: 8
      },
      {
        id: 9,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1681913284667-cacc9d120b22',
        heading: '8. Otter.ai',
        content: 'Automatically transcribe meetings and generate summaries, action items, and insights.',
        order: 9
      },
      {
        id: 10,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1683127022251-9114e4578140',
        heading: '9. GitHub Copilot',
        content: 'Write better code faster with AI pair programming that suggests line completions and entire functions.',
        order: 10
      },
      {
        id: 11,
        storyId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1681802553203-9d1d9282bf10',
        heading: '10. Synthesia',
        content: 'Create professional AI videos with virtual presenters speaking your script in over 60 languages.',
        order: 11
      }
    ]
  },
  {
    id: 2,
    title: 'Spring Fashion Trends That Will Dominate 2023',
    slug: 'spring-fashion-trends-2023',
    excerpt: 'From bold colors to sustainable fabrics, these are the fashion trends to watch this season.',
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    categoryId: 2,
    userId: 2,
    createdAt: '2023-09-05T15:30:00.000Z',
    category: 'Fashion',
    author: {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    slides: [
      {
        id: 12,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
        heading: 'Spring Fashion Trends 2023',
        content: 'Discover the styles that will define this season\'s fashion landscape.',
        order: 1
      },
      {
        id: 13,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1583952336063-eade3e96a662',
        heading: '1. Vibrant Dopamine Dressing',
        content: 'Bold, bright colors dominate this spring, with electric blues, vibrant pinks, and sunshine yellows leading the way.',
        order: 2
      },
      {
        id: 14,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3',
        heading: '2. Sustainable Fashion',
        content: 'Eco-conscious materials and circular design principles continue to reshape the industry.',
        order: 3
      },
      {
        id: 15,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2',
        heading: '3. Luxe Denim',
        content: 'Denim gets an upscale makeover with wide-leg cuts, unexpected tailoring, and head-to-toe looks.',
        order: 4
      },
      {
        id: 16,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1571513797269-d189ba1a8eff',
        heading: '4. Romantic Sheer Layers',
        content: 'Translucent fabrics create ethereal, layered looks that balance reveal and concealment.',
        order: 5
      },
      {
        id: 17,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1547093452-8a726e1a31a1',
        heading: '5. Statement Fringes',
        content: 'Playful fringe details add movement and texture to everything from dresses to accessories.',
        order: 6
      },
      {
        id: 18,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae',
        heading: '6. Y2K Revival',
        content: 'The early 2000s aesthetic continues its comeback with low-rise cuts, butterflies, and retro logos.',
        order: 7
      },
      {
        id: 19,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82',
        heading: '7. Utility Chic',
        content: 'Functional details meet refined silhouettes in this practical yet stylish approach to everyday wear.',
        order: 8
      },
      {
        id: 20,
        storyId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca',
        heading: '8. Modern Suiting',
        content: 'Oversized blazers and relaxed tailoring continue to redefine workwear for the post-pandemic era.',
        order: 9
      }
    ]
  },
  {
    id: 3,
    title: 'A Visual Journey Through the Mediterranean',
    slug: 'visual-journey-mediterranean',
    excerpt: 'Explore the stunning landscapes, cuisine, and culture of the Mediterranean coastline.',
    coverImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    categoryId: 3,
    userId: 4,
    createdAt: '2023-10-18T12:45:00.000Z',
    category: 'Travel',
    author: {
      id: 4,
      name: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    slides: [
      {
        id: 21,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        heading: 'The Mediterranean Journey',
        content: 'Join us for a visual tour of the most beautiful coastal destinations in the Mediterranean.',
        order: 1
      },
      {
        id: 22,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1533165802998-13c240198452',
        heading: 'Santorini, Greece',
        content: 'White-washed buildings cascade down volcanic cliffs, creating one of the world\'s most iconic coastal views.',
        order: 2
      },
      {
        id: 23,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1574866412308-32d9623819d1',
        heading: 'Amalfi Coast, Italy',
        content: 'Colorful villages cling to steep hillsides along this UNESCO-listed coastline of exceptional beauty.',
        order: 3
      },
      {
        id: 24,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53',
        heading: 'Barcelona, Spain',
        content: 'Gaudi\'s architectural masterpieces meet Mediterranean beaches in this vibrant Catalan city.',
        order: 4
      },
      {
        id: 25,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1563387852576-964bc31b73af',
        heading: 'Dubrovnik, Croatia',
        content: 'Ancient stone walls rise directly from the Adriatic Sea, protecting this perfectly preserved medieval city.',
        order: 5
      },
      {
        id: 26,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6',
        heading: 'Turkish Riviera',
        content: 'Crystal-clear turquoise waters meet pine-covered mountains along Turkey\'s stunning southwestern coast.',
        order: 6
      },
      {
        id: 27,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1602941800793-0e9874b112cb',
        heading: 'Mediterranean Cuisine',
        content: 'Fresh seafood, olive oil, herbs, and seasonal produce define the healthy and delicious Med diet.',
        order: 7
      },
      {
        id: 28,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1507608158173-1dcec673a2e5',
        heading: 'Coastal Traditions',
        content: 'Centuries-old maritime customs and festivals continue to thrive in Mediterranean coastal communities.',
        order: 8
      },
      {
        id: 29,
        storyId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1541617219835-3689726fa8e7',
        heading: 'Stunning Sunsets',
        content: 'The Mediterranean is famous for its spectacular sunset views over calm waters.',
        order: 9
      }
    ]
  },
  {
    id: 4,
    title: 'From Farm to Table: The Journey of Sustainable Food',
    slug: 'farm-to-table-sustainable-food-journey',
    excerpt: 'Follow the path of sustainable ingredients from local farms to your dinner plate.',
    coverImage: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d',
    categoryId: 4,
    userId: 5,
    createdAt: '2023-11-25T08:15:00.000Z',
    category: 'Food',
    author: {
      id: 5,
      name: 'Michael Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    slides: [
      {
        id: 30,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d',
        heading: 'The Farm to Table Journey',
        content: 'Discover how sustainable food practices are reshaping our relationship with what we eat.',
        order: 1
      },
      {
        id: 31,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
        heading: 'Local Farms',
        content: 'Small-scale, diversified farms are the foundation of sustainable food systems, growing varied crops with ecological methods.',
        order: 2
      },
      {
        id: 32,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17',
        heading: 'Seasonal Harvesting',
        content: 'Eating with the seasons means enjoying produce at its peak flavor, nutritional value, and lowest environmental impact.',
        order: 3
      },
      {
        id: 33,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9',
        heading: 'Farmers Markets',
        content: 'Direct farmer-to-consumer sales channels eliminate middlemen and create community connections around food.',
        order: 4
      },
      {
        id: 34,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1614886137311-fbf27298d025',
        heading: 'Sustainable Proteins',
        content: 'Ethical animal husbandry and plant-based alternatives are expanding options for environmentally conscious protein sources.',
        order: 5
      },
      {
        id: 35,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1481833761820-0509d3217039',
        heading: 'Chef Partnerships',
        content: 'Innovative chefs collaborate directly with farmers to create menus that showcase local, seasonal ingredients.',
        order: 6
      },
      {
        id: 36,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
        heading: 'Food Waste Reduction',
        content: 'From composting to creative recipes using the whole plant or animal, sustainable food systems minimize waste.',
        order: 7
      },
      {
        id: 37,
        storyId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564',
        heading: 'Community Impact',
        content: 'Local food systems create jobs, preserve agricultural land, and build resilient community connections.',
        order: 8
      }
    ]
  }
];