export interface BrandItem {
  name: string;
  items: string[];
}

interface PopupContent {
  brands?: BrandItem[];
}

type PopupContentMap = {
  [key: string]: PopupContent;
};

const POPUP_CONTENT: PopupContentMap = {
  "ACCESS CONTROL": {
    brands: [
      {
        name: "SMART",
        items: ["Push Button and Accessories", "Readers"],
      },
      {
        name: "ROSSLARE",
        items: ["HIKVISION"],
      },
    ],
  },
  ALARM: {
    brands: [
      {
        name: "BOSCH 3000/2000 SOLUTIONS",
        items: [
          "Bosch 2000 kits",
          "Bosch 3000 kits",
          "Battery & power supply",
          "Communicator",
          "Enclosure",
          "Detectors",
          "Expanders",
          "Keypads",
          "Receiver",
          "Remote controls",
          "Sirens and screamers",
          "Software & programming",
          "Panel & modules 2000/3000",
        ],
      },
      {
        name: "BOSCH 6000 SOLUTIONS",
        items: [
          "Bosch kits",
          "Battery & power supply",
          "Communicator",
          "Detectors",
          "Enclosure",
          "Expanders",
          "Keypads",
          "Panel & modules",
          "Readers & cards",
          "Receiver",
          "Remote controls",
          "Software & programming",
          "Sirens and screamers",
        ],
      },
      {
        name: "U-PROX WIRELESS",
        items: [
          "U-Prox kits",
          "Control panel",
          "Sirens",
          "Keypads",
          "Detectors",
          "Keyfobs",
          "Repeater",
          "Multiplexer",
          "Wireless",
          "Relay DC",
        ],
      },
      {
        name: "TAKEX",
        items: [
          "PIR beam",
          "PIR sensors",
          "Glass break sensors",
          "Door sensors",
        ],
      },
      {
        name: "HIKVISION AX PRO - WIRELESS",
        items: [
          "AX pro kits",
          "Control panel",
          "Detectors",
          "Keypads",
          "Reed switch",
          "Remote control",
          "Relay module",
          "Siren or sounder",
          "Readers",
          "Emergency button",
          "Repeater",
          "Transmitter",
        ],
      },
      {
        name: "HIKVISION AX HYBRID PRO - WIRED",
        items: [
          "AX hybrid pro kits",
          "Control panel",
          "Detectors",
          "Keypads",
          "GSM",
          "Expanders",
          "Battery and power supply",
          "Receiver",
          "Sounders",
          "Emergency button",
          "Relay",
          "Remote / Keyfob",
        ],
      },
      {
        name: "HILOOK AX HYBRID PRO",
        items: [
          "AX hybrid pro kits",
          "Control panel",
          "Detectors",
          "Siren",
          "Keypad",
          "Keyfob",
          "Battery & power supply",
        ],
      },
      {
        name: "INSTALLATION",
        items: [],
      },
      {
        name: "GENERAL",
        items: [],
      },
    ],
  },
  AUTOMATION: {
    brands: [
      {
        name: "ACCESS CONTROL",
        items: ["Cards / Fobs"],
      },
      {
        name: "COMMUNICATIONS",
        items: ["IP Telephony & Unified Comms"],
      },
      {
        name: "HOME AUTOMATION",
        items: ["Smart Plugs", "Smart LED Bulbs"],
      },
      {
        name: "INTERCOM SYSTEMS",
        items: [
          "Analog audio & Video",
          "IP Audio & Video",
          "Mounting & Accessories",
          "SIP Server & Voip Gateway",
        ],
      },
      {
        name: "SECURITY MANAGEMENT",
        items: [
          "Automation Control Panels",
          "Keypads / Touchscreens",
          "Pir's reed switches",
        ],
      },
      {
        name: "LIGHTING",
        items: [],
      },
    ],
  },
  CCTV: {
    brands: [
      {
        name: "DAHUA",
        items: [
          "Dahua Kits",
          "Cameras",
          "NVR",
          "Analog",
          "Accessories",
          "Dahua Three In One (TIOC) Flashing Light",
        ],
      },
      {
        name: "EZVIZ",
        items: [
          "Outdoor Wi-Fi Cameras",
          "Security Cameras",
          "Smart Home",
          "Detection Cameras",
          "Camera Technology",
          "Camera Megapixel",
          "Solar Panel",
        ],
      },
      {
        name: "HIKVISION",
        items: [
          "Hikvision Kits",
          "Analog Cameras",
          "IP Cameras",
          "Video Recorders",
          "Accessories",
          "Hikvision Best Seller",
        ],
      },
      {
        name: "HILOOK",
        items: [
          "Hilook Kits",
          "IP Cameras",
          "Analog Cameras",
          "Network Video Recording (NVR)",
          "Digital Video Recorder (DVR)",
          "Transmission",
          "Camera Brackets",
          "Accessories",
        ],
      },
      {
        name: "IVSEC",
        items: ["Accessories", "Cameras", "Ivsec Kits", "NVR"],
      },
      {
        name: "UNIVIEW - UNV",
        items: ["UNV Camera Kits", "Cameras", "NVR", "Accessories"],
      },
    ],
  },
  INTERCOM: {
    brands: [
      {
        name: "HIKVISION",
        items: [
          "Intercom Kit",
          "IP Intercom",
          "2-Wire Intercom",
          "4-Wire Intercom",
        ],
      },
      {
        name: "DAHUA",
        items: [
          "Dahua Kits",
          "2 Wire Series",
          "4 Wire Series",
          "IP Series",
          "Accessories",
        ],
      },
      {
        name: "AIPHONE",
        items: ["Intercom Kits", "Analogue Intercom", "IP Intercom"],
      },
      {
        name: "HILOOK",
        items: ["Kits", "Parts"],
      },
      {
        name: "ELVOX",
        items: [
          "Elvox Intercom Kits",
          "Elvox Door Stations",
          "Elvox Indoor Stations",
          "Elvox Accessories",
        ],
      },
    ],
  },
  LOCKS: {
    brands: [
      {
        name: "ASSA ABLOY",
        items: [
          "Door Furniture",
          "Mortice Locks",
          "Mag Locks",
          "Strikes",
          "Trimec Strikes",
        ],
      },
      {
        name: "LOX",
        items: [
          "Electric Strike",
          "Magnetic Lock",
          "Cabinet Lock",
          "Drop Bolt",
          "Shear Lock",
          "Door Holder",
        ],
      },
      {
        name: "HIKVISION",
        items: [],
      },
    ],
  },
  NETWORKING: {
    brands: [
      {
        name: "RUIJIE",
        items: [
          "Access Point",
          "Wireless Bridge",
          "Power Adapter",
          "Router",
          "Switches",
          "Home Wi-Fi",
          "Transceiver",
        ],
      },
      {
        name: "GRANDSTREAM",
        items: [
          "Analog Telephone Adaptors",
          "Audio Conferencing",
          "Cards/Fobs",
          "Control Stations",
          "Headsets",
          "Network Switch",
          "Router",
          "Voip Gateways",
          "Voip Phone Systems",
          "Webcams",
          "Wireless Access Point",
          "Poe Injector",
        ],
      },
      {
        name: "TENDA",
        items: [
          "Access Point",
          "Fiber Converter",
          "Poe Injector",
          "Router",
          "Switch",
        ],
      },
      {
        name: "HIKVISION",
        items: ["Wireless Bridge", "Switches"],
      },
    ],
  },
  ACCESSORIES: {
    brands: [
      {
        name: "CABLES",
        items: ["Data / CCTV Cables", "Security Cables"],
      },
      {
        name: "POE SWITCHES & INJECTORS",
        items: [
          "Dahua",
          "Hikvision",
          "Hilook",
          "Grandstream",
          "Ruijie",
          "Tenda",
        ],
      },
      {
        name: "SURVEILLANCE HARD DRIVE",
        items: ["Seagate Skyhawk", "Western Digital Purple"],
      },
      {
        name: "UPS BATTERY BACKUP",
        items: ["Dahua", "ION"],
      },
      {
        name: "CCTV MONITORS",
        items: [],
      },
      {
        name: "MOUNT AND JUNCTION BOXES",
        items: [],
      },
      {
        name: "SD CARDS/MEMORY CARDS",
        items: [],
      },
      {
        name: "SECURITY CABINETS",
        items: [],
      },
      {
        name: "USB, BLUETOOTH & IEEE",
        items: [],
      },
    ],
  },
  BRANDS: {
    brands: [
      { name: "AIPHONE", items: [] },
      { name: "DAHUA", items: [] },
      { name: "GRANDSTREAM", items: [] },
      { name: "ION", items: [] },
      { name: "ROSSLARE", items: [] },
      { name: "SHELLY", items: [] },
      { name: "TENDA", items: [] },
      { name: "WESTERN DIGITAL", items: [] },
      { name: "ASSA ABLOY", items: [] },
      { name: "EZVIZ", items: [] },
      { name: "HIKVISION", items: [] },
      { name: "IVSEC", items: [] },
      { name: "RUIJIE", items: [] },
      { name: "SMART", items: [] },
      { name: "UNIVIEW", items: [] },
      { name: "ELVOX", items: [] },
      { name: "BOSCH", items: [] },
      { name: "FIBARO", items: [] },
      { name: "HILOOK", items: [] },
      { name: "LOX", items: [] },
      { name: "SEAGATE", items: [] },
      { name: "TAKEX", items: [] },
      { name: "U-PROX", items: [] },
    ],
  },
  "ON SALE": {
    brands: [
      { name: "FLASH SALE", items: [] },
      { name: "HOT SALE", items: [] },
      { name: "HIKVISION SALE", items: [] },
      { name: "MARCH SALE", items: [] },
    ],
  },
};

export { POPUP_CONTENT };
