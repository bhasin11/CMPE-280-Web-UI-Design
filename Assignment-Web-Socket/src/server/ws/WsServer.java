package server.ws;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/websocketendpoint")
public class WsServer {
	
	private List<String> comments;
	private int toss, over, bowl, runs, wickets;
	
	public WsServer(){
		comments = new ArrayList();
		
		comments.add("SIX - That's heaved over mid-wicket.");
		comments.add("SIX - Straight down the ground.");
		comments.add("Four - Class written all over that.");	
		comments.add("Four - Edge and just over slips.");	
		comments.add("WICKET - Dream delivery for a fast bowler.");	
		comments.add("WICKET - What a day he is having.");	
		comments.add("1 Run - Easy Single on offer.");	
		comments.add("1 Run - Good understanding between the two.");	
		comments.add("1 Run - Just made his ground there.");	
		comments.add("2 Runs - Some good running between the wickets.");	
		comments.add("2 Runs - Finding the gaps at ease.");	
		comments.add("3 Runs - Good dive to save a run for his team.");	

		int index = new Random().nextInt(10);
		if(index%2 == 0) toss = 0;
		else toss = 1;
		
		over = 0;
		bowl = 0;
		runs = 0;
		wickets = 0;
	}
	
	@OnOpen
	public void open(){
		System.out.println("Connection Opened.");
	}
	
	@OnClose
	public void close(){
		System.out.println("Connection Closed");
	}
	
	@OnMessage
	public String message(String message){
		if(toss == 0){
			toss = -1;
			return "India won the toss and elected to bat.";
		}
		else if(toss == 1){
			toss = -1;
			return "Pakistan won the toss and elected to bat.";
		}
		if(bowl == 6){
			over++;
			bowl = 0;
		}
		bowl++;
		int index = new Random().nextInt(comments.size());
		String result = helper(index) + "XXX";
		return result+""+over+"."+bowl+"   "+comments.get(index);
	}

	@OnError
	public void error(Throwable e){
		System.out.println("Error Encountered");
	}
	
	public String helper(int index){
		String result = "";
		
		switch(index) {
			case 0 :
			case 1 :
				runs += 6;
				break; 
		   
			case 2 :
			case 3 :
				runs += 4;
				break; 
		   
			case 4 :
			case 5 :
				wickets += 1;
				break; 
			
			case 6 :
			case 7 :
			case 8 :
				runs += 1;
				break; 
			
			case 9 :
			case 10 :
				runs += 2;
				break; 
		   
		   default : 
			   runs += 3;
		}
		result = "Score "+runs+"/"+wickets+" (Overs "+over+"."+bowl+")";
		
		return result;
	}
}