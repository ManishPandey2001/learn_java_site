// src/topics.ts
// Map each topic to: title/slug and the raw HTML (imported as text)
export type Topic = {
  slug: string;
  title: string;
  subtitle?: string;
  html?: string; // will be filled by import
};

// Helper to make a topic
const T = (slug: string, title: string, subtitle?: string): Topic => ({ slug, title, subtitle });

// List of topics (order = how cards appear)
export const topics: Topic[] = [
  T("basic", "Basics of Java", "Getting started"),
  T("oop", "OOP Basics", "Abstraction, inheritance & polymorphism"),
  T("inheritance", "Inheritance", "Reusing behaviour"),
  T("interfaces", "Interfaces", "Contracts & implementations"),
  T("functions", "Functions", "Methods and signatures"),
  T("strings", "Strings", "Text processing"),
  T("data-conversion", "Data Conversion", "Parsing & casting"),
  T("packages", "Packages", "Organising code"),
  T("singlearrays", "Single-D Arrays", "Basics of arrays"),
  T("multiarrays", "Multi-D Arrays", "Matrices & grids"),
  T("multithreading", "Multithreading", "Concurrency"),
  T("exception", "Exceptions", "Errors & handling"),
  T("delegation", "Delegation", "Event model & patterns"),
  T("awt", "AWT", "Abstract Window Toolkit"),
  T("swings", "Swing", "Desktop UI"),
  T("frame", "Frames", "Windows and containers"),
  T("applets", "Applets", "Legacy browser UI"),
  //T("programs-list", "Programs List", "Practice programs"),
  T("Aboutus", "How we are", "Our team"),
  // Optional: welcome/index as separate pages
  //T("welcome", "Welcome", "Landing"),
];

export const homeIntroSlug = "welcome"; // which HTML to use in Home (optional)

// --- Raw HTML imports (Vite: ?raw) -------------------
import basic from "./content/basic.html?raw";
import oop from "./content/oop.html?raw";
import inheritance from "./content/inheritance.html?raw";
import interfaces from "./content/interfaces.html?raw";
import functions_ from "./content/functions.html?raw";
import strings_ from "./content/strings.html?raw";
import dataConversion from "./content/data-conversion.html?raw";
import packages from "./content/packages.html?raw";
import singlearrays from "./content/singlearrays.html?raw";
import multiarrays from "./content/multiarrays.html?raw";
import multithreading from "./content/multithreading.html?raw";
import exception from "./content/exception.html?raw";
import delegation from "./content/delegation.html?raw";
import awt from "./content/awt.html?raw";
import swings from "./content/swings.html?raw";
import frame from "./content/frame.html?raw";
import applets from "./content/applets.html?raw";
//import programsList from "./content/programs-list.html?raw";
//import syllabus from "./content/syllabus.html?raw";
import welcome from "./content/welcome.html?raw";
// import indexHtml from "./content/index.html?raw"; // if needed

// Wire the HTML into the topics array
const htmlMap: Record<string, string> = {
  basic,
  oop,
  inheritance,
  interfaces,
  functions: functions_,
  strings: strings_,
  "data-conversion": dataConversion,
  packages,
  singlearrays,
  multiarrays,
  multithreading,
  exception,
  delegation,
  awt,
  swings,
  frame,
  applets,
  //"programs-list": programsList,
  //syllabus,
  welcome,
};

topics.forEach(t => {
  if (htmlMap[t.slug]) t.html = htmlMap[t.slug];
});
