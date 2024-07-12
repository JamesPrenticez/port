import React, { ReactNode } from "react";

// https://fonts.google.com/icons

// // General
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";

// // Budgets & Forecasts
// import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
// import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
// import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
// import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
// import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

// // Admin
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";

export interface INavigationGroup {
  name: string;
  items?: INavigationItem[];
}

export interface INavigationItem {
  name: string;
  icon?: ReactNode;
  url: string;
  workbenchFeaturesID: number;
  supported: boolean;
}


export const navigationItems: INavigationGroup[] = [
  {
    name: "General",
    items: [
      {
        name: "Contact Heirachy",
        url: "/contact-heirachy",
        // icon: <DescriptionOutlinedIcon />,
        workbenchFeaturesID: 4,
        supported: false,
      },
      {
        name: "Service Heirarchy", 
        url: "/service-heirarchy",
        // icon: <CategoryOutlinedIcon />,
        workbenchFeaturesID: 16,
        supported: true,
      },
      {
        name: "Market & Board Groups",
        url: "/market-and-board-groups",
        // icon: <HubOutlinedIcon />,
        workbenchFeaturesID: 17,
        supported: false,
      },
      {
        name: "Business Group & Owners",
        url: "/business-group-and-owner",
        // icon: <WorkOutlineOutlinedIcon />,
        workbenchFeaturesID: 18,
        supported: false,
      },
      {
        name: "Bulk Owner Change",
        url: "/bulk-owner-change",
        // icon: <AutoAwesomeMotionOutlinedIcon />,
        workbenchFeaturesID: 36,
        supported: false,
      },
      {
        name: "Charts of Accounts", 
        url: "/charts-of-accounts",
        // icon: <ReceiptLongOutlinedIcon />,
        workbenchFeaturesID: 19,
        supported: false,
      },
      {
        name: "Time Allocations", // Connect Time Records
        url: "/time-allocations",
        // icon: <AccessTimeIcon />,
        workbenchFeaturesID: 3,
        supported: false,
      },
      {
        name: "Report Index",
        url: "/report-index",
        // icon: <ListAltOutlinedIcon />,
        workbenchFeaturesID: 20,
        supported: false,
      },
      {
        name: "ETL Monitor",
        url: "/etl-monitor",
        // icon: <SpeedOutlinedIcon />,
        workbenchFeaturesID: 21,
        supported: false,
      },
    ],
  },
  {
    name: "Budget",
    items: [
      {
        name: "Service Budgets",
        url: "/budget/service-budgets",
        // icon: <SavingsOutlinedIcon />,
        workbenchFeaturesID: 5,
        supported: false,
      },
      {
        name: "Contract Budgets",
        url: "/budget/contracts-budgets",
        // icon: <ArticleOutlinedIcon />,
        workbenchFeaturesID: 6,
        supported: false,
      },
      {
        name: "Customer Budgets",
        url: "/budgets/customer-budgets",
        // icon: <SentimentSatisfiedAltOutlinedIcon />,
        workbenchFeaturesID: 29,
        supported: false,
      },
    ],
  },
  {
    name: "Forecast",
    items: [
      {
        name: "Investment Approvals", 
        url: "/forecasts/investment-approvals",
        // icon: <CheckBoxOutlinedIcon />,
        workbenchFeaturesID: 33,
        supported: false,
      },

      {
        name: "Services",
        url: "/forecasts/services",
        // icon: <ChangeHistoryOutlinedIcon />,
        workbenchFeaturesID: 15,
        supported: false,
      },
      {
        name: "IDC Forecast",
        url: "/forecasts/idc-forecast",
        // icon: <StorefrontOutlinedIcon />,
        workbenchFeaturesID: 7,
        supported: false,
      },
      {
        name: "Non Contract Charges",
        url: "/forecasts/non-contract-charges",
        // icon: <TuneOutlinedIcon />,
        workbenchFeaturesID: 27,
        supported: false,
      },
      {
        name: "Outlook Forecast",
        url: "/forecasts/outlook-forecast",
        // icon: <VisibilityOutlinedIcon />,
        workbenchFeaturesID: 30,
        supported: false,
      },
    ],
  },
  {
    name: "Admin",
    items: [
      {
        name: "User Permissions",
        url: "/admin/permissions",
        // icon: <PeopleOutlinedIcon />,
        workbenchFeaturesID: 26, // Administration
        supported: true,
      },
      {
        name: "Feature Management",
        url: "/admin/feature-management",
        // icon: <HubOutlinedIcon />,
        workbenchFeaturesID: 26,
        supported: true,
      },
      {
        name: "Audit Log",
        url: "/admin/audit-log",
        // icon: <GradingOutlinedIcon />,
        workbenchFeaturesID: 26, 
        supported: true,
      },
    ],
  },
];
