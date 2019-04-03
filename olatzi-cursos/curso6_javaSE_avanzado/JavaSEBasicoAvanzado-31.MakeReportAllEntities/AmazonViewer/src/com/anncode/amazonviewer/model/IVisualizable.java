package com.anncode.amazonviewer.model;

import java.util.Date;

public interface IVisualizable {
	
	/**
	 * Este metodo captura el tiempo exacto de visualización
	 * @param dateI
	 * @return Devuelve la fecha y hora capturadas
	 */
	Date startToSee(Date dateI);
	
	/**
	 * Captura el tiempo exacto de inicio y final de visualización
	 * @param dateI
	 * @param dateF
	 */
	void stopToSee(Date dateI, Date dateF);
	
}
