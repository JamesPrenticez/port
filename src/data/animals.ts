interface Props {
  id: number;
  title: string;
  subTitle: string;
  desc: string;
  icon: string;
  img: string;
  url: string;
}

export const data = [
  { 
    id: 1,
    title: "Elephant",
    subTitle: "Trumpet!",
    desc: "The gentle giants of the savannah, roam vast grasslands in search of food and water, their majestic presence commanding respect and admiration.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://th-thumbnailer.cdn-si-edu.com/gKX-89VMGmQzjftbWlZkXcuRKsc=/800x800/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d0/74/d074bf4a-6fa2-4e41-bd38-8ddc33936f97/an-elephant-running-in-the-masai-mara-kenya.jpg",
    url: "https://www.google.com/search?q=elephant&source=lmns&bih=735&biw=1536&prmd=ivsnmbtz&hl=en&sa=X&ved=2ahUKEwiuibuvv_eFAxXd6DgGHQG2AoUQ0pQJKAB6BAgBEAI"
  },
  {
    id: 2,
    title: "Zebra",
    subTitle: "Bray!",
    desc: "With their striking black and white stripes, create a mesmerizing sight as they roam the African plains, embodying grace and beauty in the wild",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*RPxdEACM82IZoZdH",
    url: "https://www.google.com/search?q=zebra&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWILq13Xplo49vlYN3WJVbMc2cjg7Dw%3A1714945907692&ei=c_83Zv_pKbaQseMPi6qn2As&ved=0ahUKEwi_74utv_eFAxU2SGwGHQvVCbsQ4dUDCBA&uact=5&oq=zebra&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXplYnJhMhMQLhiABBixAxjRAxhDGMcBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQLhiABBhDGIoFMg0QLhiABBhDGNQCGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQLhiABDIiEC4YgAQYsQMY0QMYQxjHARiKBRiXBRjcBBjeBBjgBNgBAUifCFAAWJIHcAB4AZABAJgBuQKgAd8FqgEFMi0yLjG4AQPIAQD4AQGYAgOgAvIFwgIKECMYgAQYJxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAg4QLhiABBixAxjRAxjHAcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIFEAAYgATCAggQLhiABBixA5gDALoGBggBEAEYFJIHBTItMi4xoAfKSw&sclient=gws-wiz-serp"
  },
  {
    id: 3,
    title: "Buffalo",
    subTitle: "Grunt!",
    desc: "With their robust build and imposing horns, roam the grasslands in herds, embodying strength and resilience in the wild.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://compote.slate.com/images/209ef3b5-7d52-432f-9b0f-b5b7208653aa.jpg?crop=3500%2C2333%2Cx0%2Cy0",
    url: "https://www.google.com/search?q=Buffalo&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIKPEmye_Ipk2zYRQRr5A2zYpRmjUg%3A1714946426740&ei=egE4Zp3rLIbcseMP99aFgAo&ved=0ahUKEwidkMykwfeFAxUGbmwGHXdrAaAQ4dUDCBA&uact=5&oq=Buffalo&gs_lp=Egxnd3Mtd2l6LXNlcnAiB0J1ZmZhbG8yDRAuGIAEGEMY1AIYigUyDRAuGIAEGEMY1AIYigUyDRAAGIAEGLEDGEMYigUyDRAuGIAEGEMY1AIYigUyChAAGIAEGEMYigUyExAuGIAEGNEDGEMYxwEYyQMYigUyDRAuGIAEGLEDGEMYigUyCxAAGIAEGJIDGIoFMgsQLhiABBjHARivATILEAAYgAQYsQMYgwEyHBAuGIAEGEMY1AIYigUYlwUY3AQY3gQY3wTYAQFI_QJQAFgAcAB4AZABAJgB0QGgAdEBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALYAZgDALoGBggBEAEYFJIHAzItMaAHiCA&sclient=gws-wiz-serp"
  },
  {
    id: 4,
    title: "Giraffe",
    subTitle: "Snort!",
    desc: "With their long necks and graceful gait, tower over the savannah, their elegant presence adding charm to the African landscape.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://c02.purpledshub.com/uploads/sites/62/2018/06/GettyImages-524909101-4ccfcfa.jpg?webp=1&w=1200",
    url: "https://www.google.com/search?q=Giraffe&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIL85kWndHxreZp2ZtLGFChgdG1xHQ%3A1714946401518&ei=YQE4ZtOoH7agnesP3_mp6A4&ved=0ahUKEwiT3ciYwfeFAxU2UGcHHd98Cu0Q4dUDCBA&uact=5&oq=Giraffe&gs_lp=Egxnd3Mtd2l6LXNlcnAiB0dpcmFmZmUyDRAuGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAuGIAEMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBSO0EUABYAHAAeAGQAQCYAdEBoAHRAaoBAzItMbgBA8gBAPgBAvgBAZgCAaAC1wGYAwC6BgYIARABGBSSBwMyLTGgB5cO&sclient=gws-wiz-serp"
  },
  {
    id: 5,
    title: "Ostrich",
    subTitle: "Cluck!",
    desc: "With their long legs and distinctive feathers, dart across the plains, showcasing speed and agility in the desert heat.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://renedian.com/wp-content/uploads/2019/04/4-Ostriches.jpg",
    url: "https://www.google.com/search?q=Rhinoceros&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIKMgeprFDtWoO-4EIn7UVd5DcbKjg%3A1714946385707&ei=UQE4ZvTjKu3XseMPmdSUqAk&ved=0ahUKEwi00IORwfeFAxXta2wGHRkqBZUQ4dUDCBA&uact=5&oq=Rhinoceros&gs_lp=Egxnd3Mtd2l6LXNlcnAiClJoaW5vY2Vyb3MyChAuGIAEGCcYigUyChAAGIAEGEMYigUyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEC4YgAQyCBAuGIAEGNQCMgUQABiABDIXEC4YgAQYigUYlwUY3AQY3gQY3wTYAQFIzQhQAFgAcAB4AZABAJgB0gGgAdIBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALYAZgDALoGBggBEAEYFJIHAzItMaAHxS4&sclient=gws-wiz-serp"
  },
  {
    id: 6,
    title: "Rhinoceros",
    subTitle: "Stamp!",
    desc: "With their thick skin and formidable horns, command respect as they roam the African bush, symbolizing power and endurance.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_black_rhino_0.jpg",
    url: "https://www.google.com/search?q=Rhinoceros&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIIgKgI-TNAvR3aizE3FtNGLlP2ZoQ%3A1714946452424&ei=lAE4ZsrGGZKgseMP1rKvmAg&ved=0ahUKEwjK4OuwwfeFAxUSUGwGHVbZC4MQ4dUDCBA&uact=5&oq=Rhinoceros&gs_lp=Egxnd3Mtd2l6LXNlcnAiClJoaW5vY2Vyb3MyChAuGIAEGCcYigUyChAAGIAEGEMYigUyDRAuGIAEGEMY1AIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAUjVAlAAWABwAHgBkAEAmAHxAaAB8QGqAQMyLTG4AQPIAQD4AQL4AQGYAgGgAvYBmAMAugYGCAEQARgUkgcDMi0xoAe8Gg&sclient=gws-wiz-serp"
  },
  {
    id: 7,
    title: "Baboon",
    subTitle: "Wahoos!",
    desc: "With their expressive faces and playful antics, thrive in the savannah, their social nature adding vibrancy to the wilderness.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://www.bornfree.org.uk/wp-content/uploads/2023/11/Web-image-_V7A6900.jpg",
    url: "https://www.google.com/search?q=baboon&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIISVPnrS_0YYpA0-XgO2gM2igBFIA%3A1714946120012&ei=SAA4ZpYxyOXj4Q_jr6GQDw&ved=0ahUKEwiW9aqSwPeFAxXI8jgGHeNXCPIQ4dUDCBA&uact=5&oq=baboon&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgZiYWJvb24yDRAuGIAEGLEDGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY3wTYAQFI9g1QAFiWDHAAeAGQAQCYAbACoAGzCqoBBzAuMS40LjG4AQPIAQD4AQGYAgagAtAKwgIEECMYJ8ICChAjGIAEGCcYigXCAg0QLhiABBhDGNQCGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICChAuGIAEGEMYigXCAhkQLhiABBjwAxhDGNQCGJgDGKgDGIoFGIsDwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBAcICBRAuGIAEmAMAugYGCAEQARgUkgcFMi01LjGgB9lw&sclient=gws-wiz-serp"
  },
  {
    id: 8,
    title: "Lion",
    subTitle: "Roar!",
    desc: "With their majestic mane and piercing gaze, reign as the kings of the African savannah, embodying strength and authority in the wild.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
    url: "https://www.google.com/search?q=lion&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIIhzvCFOYDJiK6pkfWnGBDbG2idDQ%3A1714946413369&ei=bQE4Zt-jFq6gnesP1sariAM&ved=0ahUKEwifjpyewfeFAxUuUGcHHVbjCjEQ4dUDCBA&uact=5&oq=lion&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgRsaW9uMg0QLhiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMhMQLhiABBixAxhDGIMBGNQCGIoFMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEDSMgaUJoIWMgYcAJ4AZABAJgBmAKgAb8IqgEFMC4yLjO4AQPIAQD4AQGYAgegAuMIqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AECwgIKECMYgAQYJxiKBcICBBAjGCfCAgoQLhiABBhDGIoFwgINEC4YgAQYQxjUAhiKBcICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AECwgIcEC4YgAQY0QMYQxi0AhjHARjIAxiKBRjqAtgBAsICGRAuGIAEGEMY1AIYtAIYyAMYigUY6gLYAQLCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIcEC4YgAQY8AMYsQMYQxiDARijAxioAxiKBRiLA5gDBYgGAZAGE7oGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHBTIuMC41oAfKmwE&sclient=gws-wiz-serp"
  },
]


export const animals: Props[] = [
  { 
    id: 1,
    title: "Elephant",
    subTitle: "Trumpet!",
    desc: "The gentle giants of the savannah, roam vast grasslands in search of food and water, their majestic presence commanding respect and admiration.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://th-thumbnailer.cdn-si-edu.com/gKX-89VMGmQzjftbWlZkXcuRKsc=/800x800/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d0/74/d074bf4a-6fa2-4e41-bd38-8ddc33936f97/an-elephant-running-in-the-masai-mara-kenya.jpg",
    url: "https://www.google.com/search?q=elephant&source=lmns&bih=735&biw=1536&prmd=ivsnmbtz&hl=en&sa=X&ved=2ahUKEwiuibuvv_eFAxXd6DgGHQG2AoUQ0pQJKAB6BAgBEAI"
  },
  {
    id: 2,
    title: "Zebra",
    subTitle: "Bray!",
    desc: "With their striking black and white stripes, create a mesmerizing sight as they roam the African plains, embodying grace and beauty in the wild",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*RPxdEACM82IZoZdH",
    url: "https://www.google.com/search?q=zebra&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWILq13Xplo49vlYN3WJVbMc2cjg7Dw%3A1714945907692&ei=c_83Zv_pKbaQseMPi6qn2As&ved=0ahUKEwi_74utv_eFAxU2SGwGHQvVCbsQ4dUDCBA&uact=5&oq=zebra&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXplYnJhMhMQLhiABBixAxjRAxhDGMcBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQLhiABBhDGIoFMg0QLhiABBhDGNQCGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQLhiABDIiEC4YgAQYsQMY0QMYQxjHARiKBRiXBRjcBBjeBBjgBNgBAUifCFAAWJIHcAB4AZABAJgBuQKgAd8FqgEFMi0yLjG4AQPIAQD4AQGYAgOgAvIFwgIKECMYgAQYJxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAg4QLhiABBixAxjRAxjHAcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIFEAAYgATCAggQLhiABBixA5gDALoGBggBEAEYFJIHBTItMi4xoAfKSw&sclient=gws-wiz-serp"
  },
  {
    id: 3,
    title: "Buffalo",
    subTitle: "Grunt!",
    desc: "With their robust build and imposing horns, roam the grasslands in herds, embodying strength and resilience in the wild.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://compote.slate.com/images/209ef3b5-7d52-432f-9b0f-b5b7208653aa.jpg?crop=3500%2C2333%2Cx0%2Cy0",
    url: "https://www.google.com/search?q=Buffalo&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIKPEmye_Ipk2zYRQRr5A2zYpRmjUg%3A1714946426740&ei=egE4Zp3rLIbcseMP99aFgAo&ved=0ahUKEwidkMykwfeFAxUGbmwGHXdrAaAQ4dUDCBA&uact=5&oq=Buffalo&gs_lp=Egxnd3Mtd2l6LXNlcnAiB0J1ZmZhbG8yDRAuGIAEGEMY1AIYigUyDRAuGIAEGEMY1AIYigUyDRAAGIAEGLEDGEMYigUyDRAuGIAEGEMY1AIYigUyChAAGIAEGEMYigUyExAuGIAEGNEDGEMYxwEYyQMYigUyDRAuGIAEGLEDGEMYigUyCxAAGIAEGJIDGIoFMgsQLhiABBjHARivATILEAAYgAQYsQMYgwEyHBAuGIAEGEMY1AIYigUYlwUY3AQY3gQY3wTYAQFI_QJQAFgAcAB4AZABAJgB0QGgAdEBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALYAZgDALoGBggBEAEYFJIHAzItMaAHiCA&sclient=gws-wiz-serp"
  },
  {
    id: 4,
    title: "Giraffe",
    subTitle: "Snort!",
    desc: "With their long necks and graceful gait, tower over the savannah, their elegant presence adding charm to the African landscape.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://c02.purpledshub.com/uploads/sites/62/2018/06/GettyImages-524909101-4ccfcfa.jpg?webp=1&w=1200",
    url: "https://www.google.com/search?q=Giraffe&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIL85kWndHxreZp2ZtLGFChgdG1xHQ%3A1714946401518&ei=YQE4ZtOoH7agnesP3_mp6A4&ved=0ahUKEwiT3ciYwfeFAxU2UGcHHd98Cu0Q4dUDCBA&uact=5&oq=Giraffe&gs_lp=Egxnd3Mtd2l6LXNlcnAiB0dpcmFmZmUyDRAuGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAuGIAEMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEBSO0EUABYAHAAeAGQAQCYAdEBoAHRAaoBAzItMbgBA8gBAPgBAvgBAZgCAaAC1wGYAwC6BgYIARABGBSSBwMyLTGgB5cO&sclient=gws-wiz-serp"
  },
  {
    id: 5,
    title: "Ostrich",
    subTitle: "Cluck!",
    desc: "With their long legs and distinctive feathers, dart across the plains, showcasing speed and agility in the desert heat.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://renedian.com/wp-content/uploads/2019/04/4-Ostriches.jpg",
    url: "https://www.google.com/search?q=Rhinoceros&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIKMgeprFDtWoO-4EIn7UVd5DcbKjg%3A1714946385707&ei=UQE4ZvTjKu3XseMPmdSUqAk&ved=0ahUKEwi00IORwfeFAxXta2wGHRkqBZUQ4dUDCBA&uact=5&oq=Rhinoceros&gs_lp=Egxnd3Mtd2l6LXNlcnAiClJoaW5vY2Vyb3MyChAuGIAEGCcYigUyChAAGIAEGEMYigUyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEC4YgAQyCBAuGIAEGNQCMgUQABiABDIXEC4YgAQYigUYlwUY3AQY3gQY3wTYAQFIzQhQAFgAcAB4AZABAJgB0gGgAdIBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALYAZgDALoGBggBEAEYFJIHAzItMaAHxS4&sclient=gws-wiz-serp"
  },
  {
    id: 6,
    title: "Rhinoceros",
    subTitle: "Stamp!",
    desc: "With their thick skin and formidable horns, command respect as they roam the African bush, symbolizing power and endurance.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_black_rhino_0.jpg",
    url: "https://www.google.com/search?q=Rhinoceros&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIIgKgI-TNAvR3aizE3FtNGLlP2ZoQ%3A1714946452424&ei=lAE4ZsrGGZKgseMP1rKvmAg&ved=0ahUKEwjK4OuwwfeFAxUSUGwGHVbZC4MQ4dUDCBA&uact=5&oq=Rhinoceros&gs_lp=Egxnd3Mtd2l6LXNlcnAiClJoaW5vY2Vyb3MyChAuGIAEGCcYigUyChAAGIAEGEMYigUyDRAuGIAEGEMY1AIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEC4YgAQyBRAAGIAEMhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAUjVAlAAWABwAHgBkAEAmAHxAaAB8QGqAQMyLTG4AQPIAQD4AQL4AQGYAgGgAvYBmAMAugYGCAEQARgUkgcDMi0xoAe8Gg&sclient=gws-wiz-serp"
  },
  {
    id: 7,
    title: "Baboon",
    subTitle: "Wahoos!",
    desc: "With their expressive faces and playful antics, thrive in the savannah, their social nature adding vibrancy to the wilderness.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://www.bornfree.org.uk/wp-content/uploads/2023/11/Web-image-_V7A6900.jpg",
    url: "https://www.google.com/search?q=baboon&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIISVPnrS_0YYpA0-XgO2gM2igBFIA%3A1714946120012&ei=SAA4ZpYxyOXj4Q_jr6GQDw&ved=0ahUKEwiW9aqSwPeFAxXI8jgGHeNXCPIQ4dUDCBA&uact=5&oq=baboon&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgZiYWJvb24yDRAuGIAEGLEDGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY3wTYAQFI9g1QAFiWDHAAeAGQAQCYAbACoAGzCqoBBzAuMS40LjG4AQPIAQD4AQGYAgagAtAKwgIEECMYJ8ICChAjGIAEGCcYigXCAg0QLhiABBhDGNQCGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICChAuGIAEGEMYigXCAhkQLhiABBjwAxhDGNQCGJgDGKgDGIoFGIsDwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBAcICBRAuGIAEmAMAugYGCAEQARgUkgcFMi01LjGgB9lw&sclient=gws-wiz-serp"
  },
  {
    id: 8,
    title: "Lion",
    subTitle: "Roar!",
    desc: "With their majestic mane and piercing gaze, reign as the kings of the African savannah, embodying strength and authority in the wild.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
    url: "https://www.google.com/search?q=lion&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIIhzvCFOYDJiK6pkfWnGBDbG2idDQ%3A1714946413369&ei=bQE4Zt-jFq6gnesP1sariAM&ved=0ahUKEwifjpyewfeFAxUuUGcHHVbjCjEQ4dUDCBA&uact=5&oq=lion&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgRsaW9uMg0QLhiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMhMQLhiABBixAxhDGIMBGNQCGIoFMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEDSMgaUJoIWMgYcAJ4AZABAJgBmAKgAb8IqgEFMC4yLjO4AQPIAQD4AQGYAgegAuMIqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AECwgIKECMYgAQYJxiKBcICBBAjGCfCAgoQLhiABBhDGIoFwgINEC4YgAQYQxjUAhiKBcICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AECwgIcEC4YgAQY0QMYQxi0AhjHARjIAxiKBRjqAtgBAsICGRAuGIAEGEMY1AIYtAIYyAMYigUY6gLYAQLCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIcEC4YgAQY8AMYsQMYQxiDARijAxioAxiKBRiLA5gDBYgGAZAGE7oGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHBTIuMC41oAfKmwE&sclient=gws-wiz-serp"
  },
  {
    id: 8,
    title: "Lion",
    subTitle: "Roar!",
    desc: "With their majestic mane and piercing gaze, reign as the kings of the African savannah, embodying strength and authority in the wild.",
    icon: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-world-space-day-rocket-ship-image_2285250.jpg",
    img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
    url: "https://www.google.com/search?q=lion&sca_esv=2c6693827cfe3781&sca_upv=1&sxsrf=ADLYWIIhzvCFOYDJiK6pkfWnGBDbG2idDQ%3A1714946413369&ei=bQE4Zt-jFq6gnesP1sariAM&ved=0ahUKEwifjpyewfeFAxUuUGcHHVbjCjEQ4dUDCBA&uact=5&oq=lion&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgRsaW9uMg0QLhiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBixAxhDGIMBGIoFMhMQLhiABBixAxhDGIMBGNQCGIoFMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGN8E2AEDSMgaUJoIWMgYcAJ4AZABAJgBmAKgAb8IqgEFMC4yLjO4AQPIAQD4AQGYAgegAuMIqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AECwgIKECMYgAQYJxiKBcICBBAjGCfCAgoQLhiABBhDGIoFwgINEC4YgAQYQxjUAhiKBcICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AECwgIcEC4YgAQY0QMYQxi0AhjHARjIAxiKBRjqAtgBAsICGRAuGIAEGEMY1AIYtAIYyAMYigUY6gLYAQLCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIcEC4YgAQY8AMYsQMYQxiDARijAxioAxiKBRiLA5gDBYgGAZAGE7oGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFJIHBTIuMC41oAfKmwE&sclient=gws-wiz-serp"
  },
]