package makeFile;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Report report = new Report();
		report.setNameFile("reporte");
		report.setExtension("txt");
		report.setTitle("Reporte");
		String content = report.getTitle();
		for(int i = 0; i<5; i++){
			content += "Reporte : " + i;
		}
			report.setContent(content);
			report.makeReport();
	}

}
