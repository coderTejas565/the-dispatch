# The Dispatch

A fully responsive editorial/news landing page built with **Next.js, TypeScript, and Tailwind CSS**, created as part of an internship assignment.

The page recreates the visual structure and editorial feel of a modern digital news publication using reusable components, responsive layouts, and static mock content.

## Features

- Responsive desktop, tablet, and mobile layouts
- Editorial-style header and navigation
- Breaking news ticker
- Featured hero article — **Autonomous Governance**
- Latest News & Reports multi-column grid
- Newsletter subscription section
- Columns & Editorials section
- Video/documentary feature section
- Responsive footer
- Hover and interaction states
- Reusable React components
- Static mock data — no backend required

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **pnpm**

## Project Structure

```text
the-dispatch/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── header/
│   ├── hero/
│   ├── news/
│   ├── newsletter/
│   ├── editorials/
│   ├── video/
│   ├── desks/
│   └── footer/
│
├── data/
│
├── public/
│   └── images/
│
├── package.json
├── tsconfig.json
└── README.md
````

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/coderTejas565/the-dispatch.git
cd the-dispatch
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
pnpm build
```

### 5. Start the production server

```bash
pnpm start
```

## Design Approach

The implementation focuses on maintaining the visual hierarchy of an editorial publication.

Key design decisions include:

* Strong serif typography for headlines
* Clean sans-serif typography for navigation and supporting content
* Structured grid-based layouts
* Clear section separators
* Large editorial imagery
* Responsive spacing and typography
* Minimal visual styling to keep attention on the content

The landing page is divided into reusable React components rather than placing the entire page inside a single component.

## Content

All articles, headlines, descriptions, and newsletter content are **static mock data** created specifically for the assignment.

There is no backend, database, authentication, or CMS involved.

## Responsive Design

The layout adapts across:

* Desktop
* Tablet
* Mobile

Grid structures collapse into smaller layouts on narrower screens while maintaining the editorial hierarchy and readability.

## Deployment

The project can be deployed to Vercel directly from the GitHub repository.

**GitHub Repository:**
[https://github.com/coderTejas565/the-dispatch](https://github.com/coderTejas565/the-dispatch)

## Assignment

This project was developed as part of an internship frontend assignment to recreate a supplied news-platform design using Next.js.

The implementation focuses on:

* Visual accuracy
* Responsive design
* Component reusability
* Clean project structure
* Modern frontend practices

## Author

**Tejas**

GitHub: [https://github.com/coderTejas565](https://github.com/coderTejas565)


