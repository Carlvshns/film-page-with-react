package carl.dev.com.demo.apidocs;

import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

public class BaseSwaggerConfig {
    
    private final String basePackage;

    public BaseSwaggerConfig(String basePackage){
        this.basePackage = basePackage;
    }

    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
        .select()
        .apis(RequestHandlerSelectors.basePackage(basePackage))
        .build()
        .apiInfo(metaData());
    }

    public ApiInfo metaData(){
        return new ApiInfoBuilder().title("Movies Demo Project")
        .description("API Java 11 with Spring Boot 2.6.4 for release backend")
        .version("1.0")
        .contact(new Contact("Carlos", "https://github.com/Carlvshns", "No email"))
        .license("Hobby Dev Project/Apache LICENSE 2.0")
        .licenseUrl("https://apache.org/licenseS/LICENSE-2.0")
        .build();
    }
}
