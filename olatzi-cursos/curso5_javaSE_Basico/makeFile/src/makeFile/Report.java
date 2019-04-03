package makeFile;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

public class Report {
	private String nameFile;
	private String title;
	private String content;
	private String extension;
	
	
	public String getExtension() {
		return extension;
	}
	public void setExtension(String extension) {
		this.extension = extension;
	}
	public String getNameFile() {
		return nameFile;
	}
	public void setNameFile(String nameFile) {
		this.nameFile = nameFile;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public void makeReport() {
		if((getNameFile()!= null) && (getTitle() !=null) && (getContent() !=null)) {
			//clase file
			
			try {
				File file = new File(getNameFile()+"."+getExtension());
				FileOutputStream fos;
				fos = new FileOutputStream(file);
				OutputStreamWriter  osw = new OutputStreamWriter(fos);//para econvertirlos a caracteres
				BufferedWriter bw = new BufferedWriter(osw);
				bw.write(getContent());
				bw.close(); //cerrar el buffer
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} //el archivo lo convertimos a un string de bytes
			
			
		}else {
			System.out.println("Ingresa los datos del archivo");
		}
	}
	
}
