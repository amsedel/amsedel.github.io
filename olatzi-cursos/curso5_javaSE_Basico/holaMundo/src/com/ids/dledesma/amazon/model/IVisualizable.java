package com.ids.dledesma.amazon.model;
import java.util.Date;

public interface IVisualizable {
//metodos que necesitamos
	
	Date startToSee(Date dateI);
	//Date es el valor del retorno
	
	void stopToSee(Date dateI, Date datef);
	//no vamos a devolver nada ->void
}
