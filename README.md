# IITH GIAN

This is the repository for the IITH GIAN page. The page is hosted at [https://iith.ac.in/gian/](https://iith.ac.in/gian/).

## Getting Started

1. Clone the repository
    ```bash
    git clone https://github.com/gian-in/iith-gian.git
    ```
 
2. Install the dependencies
    ```bash
    cd iith-gian
    yarn
    ```

3. Create a `.env` file in the root directory and add the following environment variables
   ```bash
    VITE_API_FP2 = 'http://localhost:<port>/fp2'
    VITE_API_FP1 = 'http://localhost:<port>/fp1'
    ```
    Replace `<port>` with the port number where the backend server is running.

4. Run the development server
   ```bash
   yarn dev
   ```

   or
4. To build
   ```bash
   yarn build
   ```
     Build files can be found in `dist` folder.
