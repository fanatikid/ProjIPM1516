var funcOrder = {
	orderLog : [],
	currentOrder : [],
	debt : 0,
	paidDebt :0,
};



function pagaDebt (guita) {
	funcOrder.debt = funcOrder.debt - guita;
	if (funcOrder.debt <= 0)
		funcOrder.debt = 0;
};
