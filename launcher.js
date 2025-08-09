#!/usr/bin/env node

/**
 * Launcher Script for Billing Software Executable
 * Handles startup, port checking, and user guidance
 */

import { execSync } from 'child_process';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import path from 'path';

const PORT = process.env.PORT || 8080;
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkPortAvailable(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on('error', () => resolve(false));
  });
}

async function openBrowser(url) {
  const start = process.platform === 'darwin' ? 'open' : 
                process.platform === 'win32' ? 'start' : 'xdg-open';
  
  try {
    execSync(`${start} ${url}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function showBanner() {
  log('\n' + '='.repeat(60), colors.cyan);
  log('🧾 BillMaster Pro - Professional Billing Software', colors.bright + colors.green);
  log('='.repeat(60), colors.cyan);
  log('Version: 1.0.0', colors.yellow);
  log('Platform: Desktop Application', colors.yellow);
  log('Status: Starting up...', colors.yellow);
  log('='.repeat(60) + '\n', colors.cyan);
}

function showFeatures() {
  log('📋 Available Features:', colors.bright + colors.blue);
  log('  • Bill Generation & Management', colors.reset);
  log('  • Customer Transaction Import', colors.reset);
  log('  • Stock Inventory Tracking', colors.reset);
  log('  • Multi-format Export (PDF, Excel, HTML)', colors.reset);
  log('  • Account Separation & Management', colors.reset);
  log('  • Automated Bill Numbering', colors.reset);
  log('  • HTML Report Processing', colors.reset);
  log('  • Data Import/Export Tools', colors.reset);
}

function showInstructions() {
  log('\n📖 Quick Start Guide:', colors.bright + colors.magenta);
  log('  1. The application will open in your browser automatically', colors.reset);
  log('  2. Import your transaction data (Excel format)', colors.reset);
  log('  3. Configure your business settings', colors.reset);
  log('  4. Generate bills automatically!', colors.reset);
  
  log('\n💡 Tips:', colors.bright + colors.yellow);
  log('  • All data is stored locally on your computer', colors.reset);
  log('  • No internet connection required after startup', colors.reset);
  log('  • Close the terminal to stop the application', colors.reset);
  log('  • Multiple accounts supported for different businesses', colors.reset);
}

async function main() {
  showBanner();
  
  // Check if port is available
  log('🔍 Checking system requirements...', colors.cyan);
  
  const portAvailable = await checkPortAvailable(PORT);
  if (!portAvailable) {
    log(`❌ Port ${PORT} is already in use!`, colors.red);
    log('💡 Solutions:', colors.yellow);
    log('  • Close other applications using this port', colors.reset);
    log('  • Or set a different port: PORT=3000 ./fusion-starter', colors.reset);
    process.exit(1);
  }
  
  log(`✅ Port ${PORT} is available`, colors.green);
  log('🚀 Starting billing software...', colors.cyan);
  
  // Show features while starting
  showFeatures();
  
  // Start the application
  try {
    // Import and start the main server
    const { default: app } = await import('./dist/server/node-build.mjs');
    
    log(`\n🌟 Server started successfully!`, colors.bright + colors.green);
    log(`📱 Access URL: http://localhost:${PORT}`, colors.bright + colors.blue);
    
    // Try to open browser
    log('\n🌐 Opening in your default browser...', colors.cyan);
    const browserOpened = await openBrowser(`http://localhost:${PORT}`);
    
    if (!browserOpened) {
      log('⚠️  Could not open browser automatically', colors.yellow);
      log(`🔗 Please manually open: http://localhost:${PORT}`, colors.bright + colors.blue);
    }
    
    showInstructions();
    
    log('\n' + '='.repeat(60), colors.cyan);
    log('✨ BillMaster Pro is ready for use!', colors.bright + colors.green);
    log('💰 Happy billing!', colors.bright + colors.yellow);
    log('='.repeat(60), colors.cyan);
    log('\n⚠️  Press Ctrl+C to stop the application', colors.yellow);
    
  } catch (error) {
    log('\n❌ Failed to start the application!', colors.red);
    log(`Error: ${error.message}`, colors.red);
    log('\n💡 Troubleshooting:', colors.yellow);
    log('  • Ensure you have the latest version', colors.reset);
    log('  • Check antivirus settings', colors.reset);
    log('  • Try running as administrator', colors.reset);
    log('  • Contact support if issue persists', colors.reset);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('\n\n🛑 Shutting down BillMaster Pro...', colors.yellow);
  log('👋 Thank you for using our billing software!', colors.green);
  log('💾 All your data has been saved locally.', colors.cyan);
  process.exit(0);
});

process.on('SIGTERM', () => {
  log('\n\n🛑 Application terminated.', colors.yellow);
  process.exit(0);
});

// Handle unhandled errors
process.on('uncaughtException', (error) => {
  log('\n❌ Unexpected error occurred:', colors.red);
  log(error.message, colors.red);
  log('\n🔄 Please restart the application.', colors.yellow);
  process.exit(1);
});

// Start the application
main().catch((error) => {
  log(`\n❌ Startup failed: ${error.message}`, colors.red);
  process.exit(1);
});
