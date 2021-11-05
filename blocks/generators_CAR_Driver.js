Blockly.JavaScript['CAR_Driver_begin'] = function (block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 4, SCL_PIN = 5;

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'kb32-ft') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	}

	var code = '';
	code += '\n';
	code += `
	#EXTINC#include <Wire.h>#END
	#VARIABLE
	void motor(int addd=0x3F,byte L = 0, byte R = 0)
	{
	  ${WIRE_OBJ}.beginTransmission(addd); 
	  ${WIRE_OBJ}.write(L);        
	  ${WIRE_OBJ}.write(R);              
	  ${WIRE_OBJ}.endTransmission();    
	}
	#END

	\n`;
	// code += '\n';
	code += WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + ');\n';
	// code += 'carx.begin();\n';
	return code;
};
Blockly.JavaScript['car_con_motor'] = function (block) {
	var dropdown_address = block.getFieldValue('address');
	var value_fb = Blockly.JavaScript.valueToCode(block, 'L', Blockly.JavaScript.ORDER_ATOMIC);
	var value_rl = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'motor(' + dropdown_address + ',' + value_fb + ',' + value_rl + ');\n';
	return code;
};

Blockly.JavaScript['car_con_motor_str'] = function (block) {
	var dropdown_address = block.getFieldValue('address');
	var value_fb = Blockly.JavaScript.valueToCode(block, 'L', Blockly.JavaScript.ORDER_ATOMIC);
	var value_rl = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = 'motor(' + dropdown_address + ',' + value_fb + '.toInt(),' + value_rl + '.toInt());\n';
	return code;
};
