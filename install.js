#!/usr/bin/env node

/**
 * Installation Script for Billing Software
 * Helps users set up the software quickly
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkCommand(command) {
  try {
    execSync(`${command} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function runCommand(command, description) {
  log(`\n🔨 ${description}...`, colors.cyan);
  try {
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed!`, colors.green);
  } catch (error) {
    log(`❌ ${description} failed!`, colors.red);
    throw error;
  }
}

function main() {
  log('🎉 Welcome to Billing Software Setup!', colors.bright + colors.green);
  log('=' .repeat(40), colors.blue);

  // Check if this is a fresh install or existing project
  if (existsSync('node_modules')) {
    log('\n📦 Dependencies already installed!', colors.green);
  } else {
    log('\n📦 Installing dependencies...', colors.cyan);
    
    // Check for package managers
    if (checkCommand('npm')) {
      runCommand('npm install', 'Installing with npm');
    } else {
      log('❌ npm not found! Please install Node.js first.', colors.red);
      log('Download from: https://nodejs.org/', colors.yellow);
      process.exit(1);
    }
  }

  // Check if build exists
  if (!existsSync('dist')) {
    log('\n🔨 Building application...', colors.cyan);
    runCommand('npm run build', 'Building for production');
  }

  // Instructions
  log('\n🚀 Setup Complete!', colors.bright + colors.green);
  log('\nHow to use:', colors.yellow);
  log('  Development: npm run dev', colors.reset);
  log('  Production:  npm start', colors.reset);
  log('  Build exe:   npm run pack:exe:all', colors.reset);
  log('  Web build:   npm run build:web', colors.reset);

  log('\n📝 Features included:', colors.cyan);
  log('  • Bill generation and management', colors.reset);
  log('  • Customer transaction import', colors.reset);
  log('  • Stock inventory tracking', colors.reset);
  log('  • Report generation (PDF, Excel, HTML)', colors.reset);
  log('  • Multi-account support', colors.reset);
  log('  • Data import/export', colors.reset);

  log('\n🌐 Access the application:', colors.bright);
  log('  URL: http://localhost:8080', colors.green);
  log('  Default starting bill number: Auto-calculated', colors.reset);
  log('  Data storage: Browser localStorage', colors.reset);

  log('\n📚 Documentation:', colors.yellow);
  log('  • README.md - General information', colors.reset);
  log('  • AGENTS.md - Development guide', colors.reset);
  log('  • PACKAGING.md - Distribution guide', colors.reset);

  log('\n🎯 Quick Start:', colors.bright + colors.cyan);
  log('  1. npm start', colors.reset);
  log('  2. Open http://localhost:8080', colors.reset);
  log('  3. Import your transactions (Excel)', colors.reset);
  log('  4. Generate bills automatically!', colors.reset);

  log('\n' + '=' .repeat(40), colors.blue);
  log('✨ Ready to go! Happy billing! 💰', colors.bright + colors.green);
}

// Handle errors gracefully
process.on('uncaughtException', (error) => {
  log(`\n❌ Setup failed: ${error.message}`, colors.red);
  log('\nTry running: npm install', colors.yellow);
  process.exit(1);
});

// Run the installer
main();
