

pipeline {
    agent any
    stages {
        stage("Build project Image"){
            steps{
                script {
                    dockerapp = docker.build("schedulee/schedule", "-f ./Dockerfile ./")
                }
            }
        }
    }
}