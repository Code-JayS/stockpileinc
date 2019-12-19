USE devdb;

INSERT INTO vendor (companyName, address1, address2, address3, city, state, zip, email, contactNumber, contactName) VALUES ("acme", "123", "main","st", "new York", "ny", "10001", "anvil@acme.com" ,"7185552263", "Ralph Wolf");
INSERT INTO parts (name, mfgNum, mfgName, vendorNum, type, price, stock, max, min, description) VALUES ("Anvil", "69632", "Acme", "123", "Anvil", "1250.00","1", "2", "1", "165lb drop forged Anvil ridgid 25 inches");
INSERT INTO installed (installedLocation, serialNumber) VALUES ("shop", "t35t");
