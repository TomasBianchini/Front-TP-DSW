```mermaid
---
title: Class Diagram
---
classDiagram
  
    User <|-- Seller
    User <|-- Admin
    Seller "1"--"*" Product
    Product "*"--"1" Category
    Category "1"--"*" Discount
    Review "*"--"1" Product
    Order --* Cart
    Order "*"--"1" Product
    Shipping "1"--"*" Cart 
    PaymentType "1"--"*" Cart 
    Cart "*"--"1" User
   class User{
        +String user_name
        +String email
        +String password
        +String address     
   }
    class Seller{
        +String cbu
        +String shop_name
        +String cuil
    }
    class Admin{
    }
    class Shipping{
        +String shipmethod
        +String estimatedTime
        +String cancellationDeadline
        +integer price
    }    
    class Product{
        +String name
        +String description
        +String img_url
        +integer stock
        +number price 
    }
   class Category{
        +String category
    }
    class Review{
        +number rating 
        +String comment
    }
    class Discount{
        +String value
    }
    class PaymentType{
        +String payment_type
    }
   class Cart{
        +number total
    }
   class Order{
      +integer quantity 
      +number subtotal
    }


