This project is a personal website that speaks about some technologies I have used and projects I have worked on.
This project utilizes Next.js and Github Pages.

## Check out the Deployment Site

This project is readily available to view at https://melchord.github.io/

## Deployment Process

The deployment process is done automatically by the .github/workflows/intergrate.yml file using GitHub Actions.

## Run the website locally

### Step 1: Clone the project

```sh
git clone https://github.com/melchord/melchord.github.io
cd melchord.github.io/
```

### Step 2: Install npm dependencies

```sh
cd src/
npm i
```

### Step 3: Setup environment variables

The project uses a number of variables which are necessary to run. These variables are maintained in a secrets file OR for developers maintained in .env

```sh
# src/.env
NEXT_PUBLIC_FIREBASE_API_KEY=REQUIRED_KEY
NEXT_PUBLIC_FIREBASE_STORAGE_BIN=REQUIRED_KEY
...
```

### Step 3: Build and run dev

```sh
npm run build
npm run dev
```

This starts up the local website on http://localhost:3000. As you make changes, the site freshes automatically in your browser. No need to Ctrl+C!.
