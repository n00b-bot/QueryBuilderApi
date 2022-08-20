# QueryBuilderApi

Kibana Plugin to return ElasicSearch Query for ElasticBurp-NG 

### Work on
Kibana 7.17.5

### Install
`sudo /usr/share/kibana/bin/kibana-plugin install https://github.com/n00b-bot/QueryBuilderApi/files/9386901/api-7.17.5.zip`

### Build for different version
1. Setup [Enviroment](https://medium.com/query-ai/how-to-set-up-the-kibana-plugin-development-environment-f64ad8aceb80) 

3. cd folder kibana/plugins => `git clone https://github.com/n00b-bot/QueryBuilderApi`

4. yarn build && type your version
![image](https://user-images.githubusercontent.com/43785370/185742997-cbabcd86-127d-4a82-a33c-10106ca39e47.png)

4. `cd build && sudo python3 -m http.server 80` => `sudo /usr/share/kibana/bin/kibana-plugin install http://localhost/test-7.17.5.zip`
![image](https://user-images.githubusercontent.com/43785370/185743142-682a2450-5c01-4a7e-9932-438ad1c39efd.png)
