import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";




const watchesData = {
    jenny: [
    {
      id: 1,
      name: "JENNY Classic",
      image: image1,
      price: "PKR 1600",
      desc: "Premium luxury collection.",
      link: "/watches/1001",
    },

    {
      id: 2,
      name: "JENNY Royal",
      image: image1,
      price: "PKR 1600",
      desc: "Elegant modern design.",
      link: "/watches/1002",
    },

    {
      id: 3,
      // name: "JENNY Elite",
      image: image2,
      price: "PKR 1600",
      desc: "Luxury premium watch.",
      link: "/watches/1003",
    },
  ],

  omega: [
    { id: 9, name: "Seamaster Diver 300M", image: image2, price: "₹5,200", desc: "Professional dive watch, 42mm.", link: "/watches/2001" },
    { id: 10, name: "Speedmaster Moonwatch Professional", image: image2, price: "₹6,800", desc: "Legendary Moonwatch, manual wind.", link: "/watches/2002" },
    { id: 11, name: "Planet Ocean 600M", image: image1, price: "₹7,500", desc: "Robust professional diver with helium escape.", link: "/watches/2003" },
    { id: 12, name: "Aqua Terra", image: image1, price: "₹5,000", desc: "Elegant all-rounder with anti-magnetic movement.", link: "/watches/2004" },
    { id: 13, name: "De Ville Prestige", image: image1, price: "₹4,300", desc: "Dress watch with classic elegance.", link: "/watches/2005" },
    { id: 14, name: "Speedmaster Dark Side of the Moon", image: image1, price: "₹10,000", desc: "Ceramic case modern Speedmaster.", link: "/watches/2006" },
    { id: 15, name: "Seamaster 300", image: image1, price: "₹10,000", desc: "Ceramic case modern Speedmaster.", link: "/watches/2006" },
    { id: 16, name: "Constellation Co-Axial", image: image1, price: "₹5,800", desc: "Refined sports-dress crossover.", link: "/watches/2008" },
    
  ],

  "patek-philippe": [
    { id: 17, name: "Nautilus 5711", image: image2, price: "₹120,000", desc: "Iconic luxury sports watch.", link: "/watches/3001" },
    { id: 18, name: "Aquanaut 5167", image: image2, price: "₹30,000", desc: "Sporty modern Patek piece.", link: "/watches/3002" },
    { id: 20, name: "Calatrava 5227", image:image2, price: "₹35,000", desc: "Elegant dress watch with lacquer dial.", link: "/watches/3004" },
    { id: 21, name: "Grand Complication Perpetual", image: image2, price: "₹180,000", desc: "High watchmaking masterpiece.", link: "/watches/3005" },
    { id: 22, name: "Complications Chronograph", image: image2, price: "₹90,000", desc: "Patek chronograph with refined finishing.", link: "/watches/3006" },
    { id: 23, name: "Golden Ellipse", image:image2, price: "₹25,000", desc: "Iconic elliptical case design.", link: "/watches/3007" },
    { id: 24, name: "Complications Travel Time", image: image2, price: "₹55,000", desc: "Dual-time with elegant finish.", link: "/watches/3008" },
    
  ],

  "audemars-piguet": [
    { id: 25, name: "Royal Oak Jumbo 15202", image: image1, price: "₹85,000", desc: "Slim Royal Oak with iconic dial.", link: "/watches/4001" },
    { id: 26, name: "Royal Oak Offshore Chronograph", image:image1, price: "₹28,000", desc: "Sporty bold Offshore chronograph.", link: "/watches/4002" },
    { id: 27, name: "Royal Oak Selfwinding 15400", image: image1, price: "₹30,000", desc: "Everyday luxury with iconic case.", link: "/watches/4003" },
    { id: 28, name: "Code 11.59 Chronograph", image: image1, price: "₹40,000", desc: "Modern haute horlogerie chronograph.", link: "/watches/4004" },
    { id: 29, name: "Royal Oak Tourbillon", image: image1, price: "₹150,000", desc: "High complication with openworked dial.", link: "/watches/4005" },
    { id: 30, name: "Millenary", image: image1, price: "₹36,000", desc: "Elliptical case and off-centre dial.", link: "/watches/4006" },
    { id: 31, name: "Royal Oak Concept", image: image1, price: "₹220,000", desc: "Avant-garde high-tech concept watch.", link: "/watches/4007" },
    { id: 32, name: "Jules Audemars Chronograph", image: image1, price: "₹45,000", desc: "Classic AP dress chronograph.", link: "/watches/4008" },
    
  ],

  cartier: [
    { id: 33, name: "Santos de Cartier Large", image: image2, price: "₹7,500", desc: "Square-cased Santos with refined style.", link: "/watches/5001" },
    { id: 34, name: "Tank Louis Cartier", image: image2, price: "₹6,200", desc: "Timeless rectangular dress watch.", link: "/watches/5002" },
    { id: 35, name: "Ballon Bleu 42mm", image: image2, price: "₹8,200", desc: "Elegant rounded case with cabochon.", link: "/watches/5003" },
    { id: 36, name: "Pasha de Cartier", image: image2, price: "₹9,000", desc: "Bold Cartier sports-luxury watch.", link: "/watches/5004" },
    { id: 37, name: "Ronde Solo", image: image2, price: "₹4,800", desc: "Classic circular Cartier dress watch.", link: "/watches/5005" },
    { id: 38, name: "Clé de Cartier", image: image2, price: "₹7,900", desc: "Smooth, contemporary round case.", link: "/watches/5006" },
    { id: 39, name: "Drive de Cartier", image:image2, price: "₹6,700", desc: "Automotive-inspired cushion case.", link: "/watches/5007" },
    { id: 40, name: "Panthère de Cartier", image: image2, price: "₹14,000", desc: "Fashion-forward iconic bracelet watch.", link: "/watches/5008" }
  ],

  breitling: [
    { id: 41, name: "Navitimer B01 Chronograph", image: image1, price: "₹8,500", desc: "Pilot's chronograph with slide rule.", link: "/watches/6001" },
    { id: 42, name: "Superocean Heritage", image:image1, price: "₹4,400", desc: "Heritage diver with vintage looks.", link: "/watches/6002" },
    { id: 45, name: "Emergency", image: image1, price: "₹16,000", desc: "Tool watch with emergency transmitter.", link: "/watches/6005" },
    { id: 46, name: "Premier B01", image:image1, price: "₹6,200", desc: "Elegant chronograph with refined finish.", link: "/watches/6006" },
    { id: 47, name: "Superocean Automatic 44", image: image1, price: "₹4,800", desc: "Large, capable diver for serious use.", link: "/watches/6007" },
    { id: 48, name: "Avenger Chronograph 45", image: image1, price: "₹5,900", desc: "Bold chronograph built for action.", link: "/watches/6008" },
   
  ],

  iwc: [
    { id: 49, name: "Big Pilot's Watch", image: image2, price: "₹12,000", desc: "Large dial pilot's watch with power reserve.", link: "/watches/7001" },
    { id: 50, name: "Pilot's Watch Chronograph", image: image2, price: "₹6,200", desc: "Classic flieger chronograph.", link: "/watches/7002" },
    { id: 51, name: "Portugieser Automatic", image:image2, price: "₹8,900", desc: "Elegant large-dial complication.", link: "/watches/7003" },
    { id: 52, name: "Ingenieur Automatic", image: image2, price: "₹5,500", desc: "Robust engineering-inspired watch.", link: "/watches/7004" },
    { id: 53, name: "Aquatimer", image: image2, price: "₹6,800", desc: "Sporty dive watch from IWC.", link: "/watches/7005" },
    { id: 54, name: "Da Vinci Automatic", image: image2,  price: "₹3,000", desc: "Circular case with modern style.", link: "/watches/7006" },
    { id: 55, name: "Portofino Chronograph", image: image2, price: "₹6,000", desc: "Classic Italian-inspired Portofino.", link: "/watches/7007" },
    { id: 56, name: "Pilot's Watch Mark XVIII", image: image2, price: "₹4,200", desc: "Clean, legible pilot's classic.", link: "/watches/7008" },
    
  ],

  hublot: [
    { id: 57, name: "Classic Fusion 42mm", image: image2, price: "₹12,000", desc: "Fusion of materials with sleek styling.", link: "/watches/8001" },
    { id: 58, name: "Big Bang Unico", image: image2, price: "₹18,000", desc: "Bold skeletonized chronograph.", link: "/watches/8002" },
    { id: 59, name: "Spirit of Big Bang", image:image2, price: "₹20,000", desc: "Tonneau-shaped high-impact design.", link: "/watches/8003" },
    { id: 60, name: "Big Bang Sang Bleu", image: image2, price: "₹22,000", desc: "Artistic collaboration with geometric dial.", link: "/watches/8004" },
    { id: 61, name: "Classic Fusion Chronograph", image:image2, price: "₹11,000", desc: "Slim chronograph with modern flair.", link: "/watches/8005" },
    { id: 62, name: "MP Collection Tourbillon", image: image2, price: "₹150,000", desc: "Experimental haute-horlogerie tourbillon.", link: "/watches/8006" },
    { id: 63, name: "Big Bang Ferrari", image:image2, price: "₹25,000", desc: "Motorsport collaboration with Ferrari.", link: "/watches/8007" },
    { id: 64, name: "Classic Fusion Sapphire", image:image2, price: "₹30,000", desc: "Transparent sapphire case showcase.", link: "/watches/8008" },
   
  ],

  "tag-heuer": [
    { id: 65, name: "Carrera Chronograph", image: image2, price: "₹4,200", desc: "Racing-inspired chronograph.", link: "/watches/9001" },
    { id: 66, name: "Monaco Calibre 11", image: image2, price: "₹6,500", desc: "Square chrono made famous by motorsport.", link: "/watches/9002" },
    { id: 67, name: "Aquaracer Professional 300", image: image2, price: "₹3,200", desc: "Reliable professional diver.", link: "/watches/9003" },
    { id: 68, name: "Autavia Isograph", image: image2, price: "₹3,800", desc: "Heritage-inspired pilot's watch.", link: "/watches/9004" },
    { id: 69, name: "Formula 1 Quartz", image: image2, price: "₹1,200", desc: "Sporty accessible quartz piece.", link: "/watches/9005" },
    { id: 70, name: "Connected Modular", image: image2, price: "₹2,000", desc: "Luxury smartwatch platform.", link: "/watches/9006" },
    { id: 71, name: "Carrera Heuer 02", image: image2, price: "₹5,100", desc: "In-house chronograph movement.", link: "/watches/9007" },
    { id: 72, name: "Monza Chronograph", image:image2, price: "₹4,800", desc: "Historic motorsport tribute.", link: "/watches/9008" },
    
  ],

  "jaeger-lecoultre": [
    { id: 73, name: "Reverso Classic Large", image: image2, price: "₹6,700", desc: "Iconic reversible case.", link: "/watches/10001" },
    { id: 74, name: "Master Control Date", image: image2, price: "₹7,900", desc: "Refined classic with clean dial.", link: "/watches/10002" },
    { id: 75, name: "Polaris Memovox", image: image2, price: "₹12,000", desc: "Sport-luxury alarm watch.", link: "/watches/10003" },
    { id: 76, name: "Master Ultra Thin Moon", image: image2, price: "₹10,500", desc: "Slim moonphase elegance.", link: "/watches/10004" },
    { id: 77, name: "Geophysic True Second", image: image2, price: "₹11,500", desc: "Precision timekeeping instrument.", link: "/watches/10005" },
    { id: 78, name: "Master Calendar", image: image2, price: "₹13,000", desc: "Full calendar with moonphase.", link: "/watches/10006" },
    { id: 79, name: "Reverso Tribute Small Seconds", image: image2, price: "₹8,500", desc: "Slim tribute to classic Reverso.", link: "/watches/10007" },
    { id: 80, name: "Duomètre Unique Travel Time", image: image2, price: "₹55,000", desc: "Complex dual-wing mechanism.", link: "/watches/10008" },
    
  ],
};

export default watchesData;