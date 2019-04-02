package comp.ids.dledesma.holaMundo;

public class HolaMundo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("Hola mundo :))");
		
		//Enteros
		
		byte edad = 127;
		short year = -32768;
		int idUser = 1001;
		long id_twiteer= 1234567891234L;
		
		//Punto flotante
		
		float diametro = 34.25f;
		double precio = 1234.228374;
		
		//Texto
		
		char genero = 'F';
		
		//Logico
		
		boolean isVisible = true;
		boolean $visible = false;
		boolean _visible = true;
		
		//constantes
		
		int VALOR = 0;
		int VALOR_MAXIMO = 1;
		
		//lowerCamel case
		int minValor = 4;
		
		byte b = 6; //casteo implicito
		short s = b;
		
		//necesitamos casteo
		b= (byte)s;
		
		int isi =2;
		double d =2.5;
		isi= (int)d; //casteo forzoso
		
		
		int codigo = 97;
		char codigoASCII = (char)codigo;
		
		short numero =256; 
		byte numeroByte = (byte)numero;
		
		//ARRAYS
		//declaracion de array
		
		int[] nombreArray = new int [3];
		double arregloDouble[];
		
		//dos dimenciones
		int [][] array2D = new int [2][3];
		int [][][] array3D = new int [2][3][2];
		
		char [][] names = {{'M','T','W'}, {'W', 'T', 'F'}};
		int [][][] names3d = {{{1},{2}}, {{3},{4},{5}}};
		
		char[][][][] monkey = new char[2][3][2][2];
		monkey[1][0][1][0] = 'm';
		
		System.out.println(codigoASCII);
		System.out.println(numeroByte);
		
		//operadores aritmeticos
		int a =1;
		int e =5;
		int aa= a+e;
		System.out.println("El valor es: " + aa);
		System.out.println(e%a); //modulo
		
		
		System.out.println();
		int [] numeros = new int [5];
		
		for(int i = 0; i<5; i++) {
			//numeros[i]=i;
			System.out.println("numeros["+i+"]" + numeros[i]);
		}
		
		////for each, cuando queremos acceder al elemento no el indice
		
		for(int j : numeros){
			System.out.println(j);
		}
		
		///for dos dimensiones
        //Definimos un array de 3 filas x 5 columnas
        int array[][]={{1,2,3,4,5}, {6,7,8,9,10}, {11,12,13,14,15}};
        
        //Recorremos el array multidimensional
        for (int i=0;i<array.length;i++){
            for(int j=0;j<array[0].length;j++){
                System.out.println(array[i][j]);
            }
        }
        
        //for each 2D
        
        //Recorremos el array multidimensional
        for (int[] arrayInterno : array){
            for(int num: arrayInterno){
                System.out.println(num);
            }
        }
		
		
		
		
		
	}

}
