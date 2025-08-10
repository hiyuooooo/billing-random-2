# Build Commands for Billing Software

## ✅ FIXED - Packaging Now Working!

The pkg configuration has been fixed and executables are now generating successfully.

## Quick Commands (Windows)

### 1. Create Windows Executable Only
```cmd
make-exe.bat
```

### 2. Create All Platform Executables  
```cmd
make-all.bat
```

## Manual Commands

### Development
```bash
npm run dev          # Development server (http://localhost:5173)
npm start            # Production server (http://localhost:8080)
```

### Build Executables
```bash
npm run pack:exe:win     # Windows only (.exe)
npm run pack:exe:mac     # macOS only  
npm run pack:exe:linux   # Linux only
npm run pack:exe:all     # All platforms
```

### Web Build
```bash
npm run build:web        # Build for web hosting
npm run build:all        # Build everything (web + executables)
```

## Output Files

After successful build, you'll find:

```
executables/
├── node-build-win.exe    # Windows executable (~37MB)
├── node-build-macos      # macOS executable (~51MB)
└── node-build-linux      # Linux executable (~46MB)

dist/spa/                 # Web deployment files
├── index.html
├── assets/
└── ...
```

## What Was Fixed

✅ **pkg configuration** - Updated to include `.mjs` files  
✅ **Build process** - All executables now generate correctly  
✅ **File paths** - Fixed module resolution issues  

## Usage Instructions

### Windows Executable
1. Double-click `node-build-win.exe`  
2. Application opens in your default browser
3. Access at http://localhost:8080

### macOS/Linux
1. Run `./node-build-macos` or `./node-build-linux`
2. Application opens in your default browser  
3. Access at http://localhost:8080

### Web Version
1. Upload `dist/spa/` folder to web hosting
2. Point domain to uploaded files
3. Access via your domain URL

## Features Included

- ✅ Bill generation and management
- ✅ Customer transaction import  
- ✅ Stock inventory tracking
- ✅ Multi-format export (PDF, Excel, HTML)
- ✅ Account separation & management
- ✅ Automated bill numbering
- ✅ HTML report processing
- ✅ Data import/export tools
- ✅ No internet required (standalone)
- ✅ Local data storage

## System Requirements

- **Windows**: Windows 10/11
- **macOS**: macOS 10.15+  
- **Linux**: Ubuntu 18+, CentOS 8+
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## File Sizes

| Platform | File Size | Notes |
|----------|-----------|-------|
| Windows  | ~37MB     | .exe format |
| macOS    | ~51MB     | Universal binary |  
| Linux    | ~46MB     | Statically linked |

---

**🎉 All packaging issues resolved! Ready for distribution!**
