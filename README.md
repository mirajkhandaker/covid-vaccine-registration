# Laravel developer coding test #
This project combines Laravel 11 as the backend framework with React & Bootstrap for the frontend. Follow the instructions to set up and run the project.

## Prerequisites ##
- PHP >= 8.2
- Composer
- Node >= 18.x
- npm >= 8.x
- MySql or SQLite Database (Prefer MySql)

## How to Install and Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/mirajkhandaker/covid-vaccine-registration.git

2. Install laravel dependencies:
   ```bash
   composer install

3. Install React dependencies:
   ```bash
   npm install

4. Copy .env.example to .env:

   ```bash
   cp .env.example .env

5. Generate key:

   ```bash
   php artisan key:generate

6. Configure Database in your .env:
    ```
    DB_CONNECTION=mysql
    DB_HOST=db_host
    DB_PORT=db_port
    DB_DATABASE=db_name
    DB_USERNAME=db_user_name
    DB_PASSWORD=db_password
   ```

7. Run migration and seed
    ```bash
   php artisan migrate --seed
    ```
   This command will create the database table and run the seeder for vaccine center.

8. Run the Laravel/Backend part of application
    ```bash
   php artisan serve
   ```

9. Run the React/Frontend part of application
    ```bash
   npm run dev
   ```
   This command will run React in dev mode.
    ```bash
   npm run build
   ```
   This command will run React in build mode.
10. To access the application open your browser and visit this url http://127.0.0.1:8000 or the port show in your terminal after running the laravel application.

11. Please update your `.env` file `APP_URL` with the URL shown when you run the Laravel application. This URL will be used by the React application as the base URL. If this URL is not set properly, then the React frontend will not work properly.
12. Sending the email for every day at 9:00 PM run this command
    ```
    php artisan schedule:work
    ```

## Changes need to be make for sending SMS ##

- Configure the SMS vendor credentials like secret key and app key as provided by the vendor.
- implement a function for sending SMS inside the `VaccinationScheduleNotification` class. For example:
    ```
  public function toSms($notifiable){
       //implement the function
  }
  ```
- Call this function from inside the `toMail` method:
    ```
    public function toMail($notifiable){
        $this->toSms($notifiable);
        //Existing email notification logic
  }
  ```
   
