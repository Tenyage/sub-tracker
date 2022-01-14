package com.example.subtracker;

import org.json.JSONArray;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONObject;

import org.springframework.stereotype.Service;

@Service
public class SubscriberCountService {
    public int getSubscriberCount(String channelID){
        // variables for api request
        HttpURLConnection connection;
        StringBuffer response = new StringBuffer();
        String line;

        // generated api key
        String youtubeAPIkey = "AIzaSyAkflfdib7eN0n0QMs25FtG4pZbsH1hyKY";

        try {
            URL url = new URL("https://www.googleapis.com/youtube/v3/channels?part=statistics" +
                    "&id=" + channelID +
                    "&key=" + youtubeAPIkey);
            connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("GET");
            int status = connection.getResponseCode();

            // 200 status means success, response is the json string
            if (status == 200){
                BufferedReader reader;
                reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                while((line = reader.readLine()) != null){
                    response.append(line);
                }
                reader.close();
            } else {
                BufferedReader reader;
                reader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
                while((line = reader.readLine()) != null){
                    response.append(line);
                }
                reader.close();
            }

            // extract the subscriberCount
            JSONObject entireObject = new JSONObject(response.toString());
            JSONArray itemsArray = entireObject.getJSONArray("items");
            JSONObject itemsObject = itemsArray.getJSONObject(0);
            JSONObject statistics = itemsObject.getJSONObject("statistics");
            return Integer.parseInt(statistics.get("subscriberCount").toString());

        }  catch (IOException e){
            e.printStackTrace();
            return -1;
        }

    }
}
