# 🏢 Dual Account Setup - Complete Guide

## ✅ What You Requested
You wanted **2 separate apps running on different localhost hosts** for two accounts instead of switching between them.

## 🎯 Solution Delivered

### **Development Mode (Recommended for Testing)**
```bash
# Terminal 1 - Sadhana Agency
npm run dev:sadhana     # Runs on http://localhost:8080

# Terminal 2 - Himalaya Traders  
npm run dev:himalaya    # Runs on http://localhost:8081
```

### **Production Mode (Built Applications)**
```bash
# Start both accounts
start-both-accounts.bat

# OR start individually
start-sadhana-only.bat    # Port 8080
start-himalaya-only.bat   # Port 8081
```

### **Executable Mode (Standalone)**
```bash
# Create dual executables
make-dual-executables.bat
```

## 📂 What You Get

### **Separate Servers:**
- **Sadhana Agency**: `http://localhost:8080`
- **Himalaya Traders**: `http://localhost:8081`

### **Separate Data Storage:**
- Each account has its own localStorage prefix
- Bills, customers, stock completely separate
- No data mixing between accounts
- Independent bill numbering

### **Independent Features:**
- ✅ Separate bill sequences (Sadhana starts from 1, Himalaya starts from 1)
- ✅ Independent customer databases
- ✅ Separate stock inventories
- ✅ Account-specific settings
- ✅ Individual HTML report configurations
- ✅ Separate transaction imports

## 🚀 Quick Start Commands

### **Option 1: Run Both Accounts (Easiest)**
```cmd
start-both-accounts.bat
```
- Opens 2 command windows
- Starts both servers automatically
- Opens 2 browser tabs
- Each account runs independently

### **Option 2: Individual Accounts**
```cmd
start-sadhana-only.bat      # Only Sadhana Agency
start-himalaya-only.bat     # Only Himalaya Traders
```

### **Option 3: Executables (Portable)**
```cmd
make-dual-executables.bat
```
Creates: `BillMaster-Dual-Accounts/` with complete package

## 📋 Package Structure

```
BillMaster-Dual-Accounts/
├── Sadhana-Agency/
│   ├── Sadhana-Agency.exe
│   ├── spa/ (web interface)
│   └── Start-Sadhana.bat
│
├── Himalaya-Traders/
│   ├── Himalaya-Traders.exe
│   ├── spa/ (web interface)
│   └── Start-Himalaya.bat
│
├── Start-Both-Accounts.bat    # Launch both
└── README.txt                 # Instructions
```

## 🎯 Usage Scenarios

### **Scenario 1: Work on Both Accounts Simultaneously**
1. Run `start-both-accounts.bat`
2. Browser opens 2 tabs:
   - Tab 1: Sadhana Agency (localhost:8080)
   - Tab 2: Himalaya Traders (localhost:8081)
3. Switch between tabs to work on different accounts

### **Scenario 2: Dedicated Account Workstations**
1. Computer 1: Run Sadhana Agency only (port 8080)
2. Computer 2: Run Himalaya Traders only (port 8081)
3. Each computer has its own dedicated billing system

### **Scenario 3: Portable Distribution**
1. Create executables with `make-dual-executables.bat`
2. Copy `BillMaster-Dual-Accounts/` folder to any Windows PC
3. No installation required - just run the .bat files

## 🔧 Technical Details

### **Port Configuration:**
- Sadhana Agency: Always port 8080
- Himalaya Traders: Always port 8081
- Ports are hardcoded per account for consistency

### **Data Separation:**
- Sadhana data stored with prefix: `sadhana_`
- Himalaya data stored with prefix: `himalaya_`
- Example: `sadhana_bills`, `himalaya_bills`

### **Auto-Detection:**
- Each server automatically identifies its account
- Browser shows account name in title bar
- Visual indicators show which account you're using

## ✅ Features Working

### **All Original Features Per Account:**
- ✅ Bill generation with zero mismatches
- ✅ Auto-calculated bill numbers (separate sequences)
- ✅ Customer transaction import (Excel)
- ✅ Stock inventory management
- ✅ Multi-format export (PDF, Excel, HTML)
- ✅ HTML report customization
- ✅ Data import/export tools

### **New Multi-Account Features:**
- ✅ Simultaneous operation
- ✅ Independent data storage
- ✅ Account-specific URLs
- ✅ Visual account indicators
- ✅ Separate browser contexts

## 🎉 Result

You now have **2 completely independent billing applications** that can run simultaneously on different localhost ports, each with their own data storage and bill sequences.

**Ready to use:** Run `start-both-accounts.bat` and access both accounts in separate browser tabs!
