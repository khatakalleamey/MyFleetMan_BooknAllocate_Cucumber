package ReqLogic;

import org.openqa.selenium.WebDriver;

public class BookingNeccasaryLogic {

	public int initial = 1;
	public WebDriver dr;

	public String BookingValidationLogic() {

		String S1 = "NK210201005";
		String newString = S1.substring(2);
		System.out.println(newString.getClass());
		String firstS = S1.substring(0, 2);
		System.out.println(firstS);

		int Cvalue = Integer.parseInt(newString);
		System.out.println(Cvalue);
		int Rvalue = Math.addExact(Cvalue, initial);
		System.out.println(Rvalue);

		String RequiredString = String.valueOf(Rvalue);
		String NewReqV1 = firstS.concat(RequiredString);

		System.gc();
		Runtime.getRuntime().gc();

		return NewReqV1.toString();
	}

}
