pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/zainulashif03-boop/git-action-mp.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r git-action-mp/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
