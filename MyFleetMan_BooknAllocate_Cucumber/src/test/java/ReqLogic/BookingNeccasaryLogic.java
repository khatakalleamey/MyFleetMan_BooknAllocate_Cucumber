package ReqLogic;

import org.openqa.selenium.WebDriver;

public class BookingNeccasaryLogic {

	public int initial = 1;
	public WebDriver dr;

	public String BookingValidationLogic(String bookID) {
//Available Last bookiongId
		String S1 = bookID;
		String newString = S1.substring(2);
		String firstS = S1.substring(0, 2);
//Conversion into int
		int Cvalue = Integer.parseInt(newString);
		// int initial = 1;
		int Rvalue = Math.addExact(Cvalue, initial);
//Again Storing into String and required BookingId
		String RequiredString = String.valueOf(Rvalue);
		String NewReqV = firstS.concat(RequiredString);
		System.out.println("********* " + NewReqV + " **********");

		System.gc();
		Runtime.getRuntime().gc();
		return NewReqV.toString();

	}

}
