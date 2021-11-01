Blockly.Blocks['CAR_Driver_begin'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("KB Driver begin");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Config KB Driver begin");
		this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-KB_Driver");
	}
};

Blockly.Blocks['car_con_motor'] = {
	init: function() {
	  this.appendDummyInput()
			.appendField("DC Motor add")
			.appendField(new Blockly.FieldDropdown([["0x3F","0x3F"], ["0x3E","0x3E"]]), "address");
	  this.appendValueInput("L")
		  .setCheck("Number")
		  .appendField("L");
	  this.appendValueInput("R")
		  .setCheck("Number")
		  .appendField("R");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ -100 - 100  ตรงกลาง 0 ");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-KB_Driver");
	}
  };

  Blockly.Blocks['car_con_motor_str'] = {
	init: function() {
	  this.appendDummyInput()
			.appendField("DC Motor(str) add")
			.appendField(new Blockly.FieldDropdown([["0x3F","0x3F"], ["0x3E","0x3E"]]), "address");
	  this.appendValueInput("L")
		  .setCheck("")
		  .appendField("L");
	  this.appendValueInput("R")
		  .setCheck("")
		  .appendField("R");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(135);
   this.setTooltip("ตัวเลขใส่ได้ -100 - 100  ตรงกลาง 0 ");
   this.setHelpUrl("https://github.com/cmmakerclub/kbide-plugin-KB_Driver");
	}
  };
