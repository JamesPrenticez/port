import { type IPlaygroundProjects } from "models";

import { Bard, Cogs, HungryCaterpiller, BouncyText, MtCook, Handwriting } from "@components/playground"

export const data: IPlaygroundProjects[] = [
  {
    id: "1",
    title: "Bard",
    slug: "bard",
    desc: "",
    component: <Bard />,
    image: ""
  },
  {
    id: "2",
    title: "Hungry Caterpiller",
    slug: "hungry-caterpiller",
    desc: "",
    component: <HungryCaterpiller />,
    image: ""
  },
  {
    id: "3",
    title: "Cogs",
    slug: "cogs",
    desc: "",
    component: <Cogs />,
    image: ""
  },
  {
    id: "4",
    title: "Bouncy Text",
    slug: "bouncy-text",
    desc: "",
    component: <BouncyText text="Hover Me!" />,
    image: ""
  },
  // {
  //   id: "5",
  //   title: "Mt Cook",
  //   slug: "mt-cook",
  //   desc: "",
  //   component: <MtCook />,
  //   image: ""
  // },
  {
    id: "6",
    title: "Handwriting",
    slug: "handwriting",
    desc: "",
    component: <Handwriting />,
    image: ""
  },
  // {
  //   id: "",
  //   title: "",
  //   slug: "",
  //   desc: "",
  //   component: < />,
  //   image: ""
  // },
]

