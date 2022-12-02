package com.supermarket.supermarketbackend;
import java.lang.annotation.Inherited;

import lombok.Getter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name='admin')
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="Name")
    private string username;
    @Column(name="Password")
    private StringBuffer Password;
    @Column(name="Address")
    private string Address;
    @Column(name="Phone_Number")
    private int phone_number;
    @Column(name="EmailId")
    private string emailid;
    public string getUserName(){
        return username;
    };
    public void setusername(string username){
        this.username=username;
    };
    public int getid(){
        return id;
    };
    public void setid(int id){
        this.id=id;
    };
    public StringBuffer getpassword(){
        return Password;
    };
    public void setPasswod(StringBuffer Password){
        this.Password=Password;
    };
    public string getAddress(){
        return Address;
    };
    public void setAddress(string Address){
        this.Address=Address;
    };
    public int getPhoneNumber(){
        return phone_number;
    };
    public void setPhoneNumber(int phone_number){
        this.phone_number=phone_number;
    };
    public string getemail(){
        return emailid;
    };
    public void setemail(string emailid){
        this.emailid=emailid;
    };

    public void change_password( string pass, string old, string new_p ){
        if(old.equals(Password))
        {
           Password=new_p;           
        }
        System.out.print("Old Password did not match!");

        // Write code to update in database
    };
    public void withdraw_account(){
        delete User;
        // Write code to update in database
    };
    public void login(){
        //Match id and password from database and if matched, allow to go to new screen
        // Else ouput incorrect creds
    };
    public void register(){
        // Add database queries to append everything to table
    };

}
