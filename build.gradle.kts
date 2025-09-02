// Root-level Gradle file
plugins {
    // Android plugin (register, but don’t apply yet)
    id("com.android.application") version "8.1.0" apply false

    // Kotlin plugin if you use Kotlin (optional)
    kotlin("jvm") version "1.8.0" apply false

    // Firebase Google Services plugin (register here)
    id("com.google.gms.google-services") version "4.4.3" apply false
}

// You can also have other buildscript or dependency sections below if needed

