# Mailchimp-Newsletter-API-using-express

This is a project which uses the Mailchimp API to make a NEWS LETTER webapp where you just signup for the newsletter using your details like firstname ,lastname and email address.

## 1. Landing page

![image](https://github.com/user-attachments/assets/a8bce220-4fcc-40a6-8d0c-37610df673fd)



## 2. Filling up the form

Whenever we enter the details in the signup form and submit the details then a post request is called and express handles the post request using node post function written in the app.js file.

![image](https://github.com/user-attachments/assets/399aeb9e-1bbe-45a6-8205-d566622eda11)




## 3. Successfully Signed Up

when the status code is 200 i.e., whenever the server was able to post the data to Mailchimp API then it returns the 200 ok status. and when 200 status is returned then express returns success.html file.

![image](https://github.com/user-attachments/assets/b7277a14-a2d0-4fed-bc5d-7eaf3aae3e4a)



## 4. OOps! some error occured

And if the status is anything other than 200 then it will return failure.html file.

![image](https://github.com/user-attachments/assets/ab41501d-10d8-469a-b77d-405d24a47d71)


## 5. Mailchimp API Dashboard

The record/subscriber gets added on top of the list as highlighted in the image below.

![image](https://github.com/user-attachments/assets/50221315-9cbf-469c-836f-d2d1d6d9a79b)


