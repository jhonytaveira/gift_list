# GIFT LIST
&nbsp;
### Installation
   Requires [Node.js](https://nodejs.org/) - version 10
 
   [Yarn.js](https://yarnpkg.com/pt-BR/) - version 1.15.2
 
   [postgresql](https://www.postgresql.org/) version 9+
 
   Ruby version 2.5.3
 
   Rails version 5.2.3
 
```sh
git clone https://github.com/jhonytaveira/gift_list.git
cd gift_list/
bundle install
```
>
> Configure database.yml with your credentials.
>
```sh
rake db:create
rake db:migrate
```
>
> The seed is important for populates the database.
>
```sh

rake db:seed
yarn install
rails s
```
>
>Access localhost from google chrome browser   http://localhost:3000
>
&nbsp;
&nbsp;

# Project details

***Main resources used:*** ruby, rails, react, redux and activeStorage.


**1 -** Search products by name    

**2 -** Selecting products adding the quantity                                                                         

**3 -** Filling number products, the list total is updated 


**4 -** Tree menu with categories, subcategories and products                       

**5 -** Images are stored local by rails active Storage

**6 -** Query pagination per page

# running tests

features test with rspec and capybara

```sh
rspec spec/features/
```
