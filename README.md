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

4. Copy .env from .env.example:

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

11. Please update your .env file **APP_URL** with the port number show when you run the Laravel application. This URL will use by react application as base URL. If this url does not set properly than React/Frontend not going to work properly.
12. Sending the email for every day at 9:00 PM run this command
    ```
    php artisan schedule:work
    ```

## Changes need to be make for sending SMS ##

- Need to be configure SMS vendor credentials like secret key, app key what ever credentials provide by the vendor.
- Then need to implement a function for sending SMS inside `VaccinationScheduleNotification` for example `
    ```
  public function toSms($notifiable){
       implement the function
  }
  ```
- Call this function from inside `toMail`
    ```
    public function toMail($notifiable){
        $this->toSms($notifiable);n
  }
  ```
   
