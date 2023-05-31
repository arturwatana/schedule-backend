

pipeline {
    agent any
    stages {
        stage("Build project Image"){
            steps{
                script {
                    dockerapp = docker.build("schedulee/schedule:${env.BUILD_ID}", "-f ./Dockerfile ./")
                }
            }
        }
    }
}