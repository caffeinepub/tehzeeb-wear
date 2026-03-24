import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {

  public type Product = {
    id : Nat;
    name : Text;
    category : Text;
    price : Nat;
    stock : Nat;
    isLimitedDrop : Bool;
    badge : Text;
  };

  public type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  let products : [Product] = [
    { id = 1; name = "Tehzeeb Hoodie - Black"; category = "Hoodie"; price = 7500; stock = 5; isLimitedDrop = true; badge = "Limited Drop" },
    { id = 2; name = "Tehzeeb Hoodie - Forest"; category = "Hoodie"; price = 7500; stock = 12; isLimitedDrop = false; badge = "" },
    { id = 3; name = "Roots Tee - White"; category = "Tee"; price = 3200; stock = 3; isLimitedDrop = true; badge = "Limited Drop" },
    { id = 4; name = "Roots Tee - Black"; category = "Tee"; price = 3200; stock = 20; isLimitedDrop = false; badge = "" },
    { id = 5; name = "Tehzeeb Kurta - Beige"; category = "Kurta"; price = 5500; stock = 8; isLimitedDrop = true; badge = "New" },
    { id = 6; name = "Tehzeeb Kurta - Olive"; category = "Kurta"; price = 5500; stock = 15; isLimitedDrop = false; badge = "" }
  ];

  stable var newsletterEmails : [Text] = [];
  stable var contactSubmissions : [ContactSubmission] = [];

  public query func getProducts() : async [Product] {
    products
  };

  public query func getProductById(id : Nat) : async ?Product {
    Array.find<Product>(products, func(p) { p.id == id })
  };

  public func subscribeNewsletter(email : Text) : async Bool {
    let already = Array.find(newsletterEmails, func(e : Text) : Bool { e == email });
    switch (already) {
      case (?_) { false };
      case null {
        newsletterEmails := Array.append(newsletterEmails, [email]);
        true
      };
    }
  };

  public func submitContact(name : Text, email : Text, message : Text) : async Bool {
    let entry : ContactSubmission = { name; email; message };
    contactSubmissions := Array.append(contactSubmissions, [entry]);
    true
  };

}
