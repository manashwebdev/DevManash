// Edit this file only. Everything on the site reads from here.
window.CLINIC = {
  name: "Grinova", tagline: "Where every smile shines bright", city: "Your City",
  phone: "+91 92587 11610", whatsapp: "919258711610", // digits only, with country code
  address: "12 Garden Road, Your City, India 000000",
  email: "webdevmanash@gmail.com",
  bookingEmail: "webdevmanash@gmail.com", // appointment requests are emailed here
  mapQuery: "dental clinic Your City", // used for Google Maps embed and links
  videoUrl: "", // optional: YouTube embed URL e.g. https://www.youtube.com/embed/xxxx
  // opening hours by weekday (0 = Sunday): [openHour, closeHour] in 24h, or null when closed
  hours: {0:null,1:[9,19],2:[9,19],3:[9,19],4:[9,19],5:[9,19],6:[9,15]},
  slotMinutes: 30,
  services: [
    {id:"checkup", title:"Check-up & cleaning", icon:"ic-brush-tooth", photo:"cleaning", time:"45 min", from:600, text:"A full exam, scaling and polish. We look for cavities, gum trouble and early signs of decay, then show you what we found."},
    {id:"whitening", title:"Teeth whitening", icon:"ic-sparkle-tooth", photo:"whitening", time:"60 min", from:6000, text:"In-chair whitening that lifts years of tea and coffee stains. We match your shade to a guide so results look natural."},
    {id:"implants", title:"Dental implants", icon:"ic-implant-pin", photo:"implant-model", time:"60-90 min per stage", from:28000, text:"A titanium post and custom crown that replace a missing tooth. Planned on a scan, placed by our implantologist."},
    {id:"braces", title:"Braces & aligners", icon:"ic-braces", photo:"braces-teen", time:"45 min", from:25000, text:"Metal, ceramic or clear aligners for teens and adults. Your orthodontist maps the full plan before you begin."},
    {id:"rootcanal", title:"Root canal", icon:"ic-rootcanal", photo:"rootcanal-xray", time:"60-90 min", from:4500, text:"Saves a badly infected tooth. Done under local anaesthesia with rotary tools, usually in one or two visits."},
    {id:"kids", title:"Kids' dentistry", icon:"ic-happy-tooth", photo:"kids", time:"30 min", from:500, text:"Gentle first visits, fluoride, sealants and habit advice. We explain everything to the child before we touch a tool."}
  ],
  doctors: [
    {name:"Dr. Priya", role:"General & Cosmetic Dentist", years:12, photo:"dr-priya"},
    {name:"Dr. Arjun", role:"Implantologist", years:15, photo:"dr-arjun"},
    {name:"Dr. Meera", role:"Orthodontist & Pediatric Dentist", years:10, photo:"dr-meera"},
    {name:"Dr. Kabir", role:"Endodontist, Root Canal Specialist", years:18, photo:"dr-kabir"}
  ],
  testimonials: [
    {name:"Ananya S.", photo:"t-1", text:"I put off my root canal for months. Dr. Kabir explained every step and I felt almost nothing."},
    {name:"Rohan M.", photo:"t-2", text:"Clear quotes, no surprise charges, and my implant looks like my own tooth. Worth every rupee."},
    {name:"Kavya R.", photo:"patient-c", text:"My son used to cry at dentists. Dr. Meera got him laughing in the first five minutes."}
  ],
  faqs: [
    ["Will it hurt?","Most treatments are painless. We use numbing gel and local anaesthesia, and we stop whenever you raise a hand."],
    ["How much will it cost?","Prices start at the amounts in the table above. You get a written estimate before any treatment begins."],
    ["Do you accept insurance?","Yes. We work with major insurers and can help you file the claim. Bring your policy card on the first visit."],
    ["What happens on my first visit?","About 45 minutes: a check-up, X-rays if needed, and a clear plan. No treatment starts without your approval."],
    ["Do you treat children?","Yes. Dr. Meera sees children from age 2. Kids can bring a toy and a parent can stay beside them."],
    ["What if I have a dental emergency?","Call the Emergency number on this page. We keep same-day slots free for severe pain, swelling and broken teeth."]
  ]
};
