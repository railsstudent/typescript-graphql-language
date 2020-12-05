import { AboutMe } from './../entity'
import { Query, Resolver } from 'type-graphql'

@Resolver(() => AboutMe)
export class AboutMeResolver {
    @Query(() => AboutMe)
    me(): AboutMe {
        return {
            name: 'Connie Leung',
            github: 'https://github.com/railsstudent',
            bio: `A software engineer with extensive experience in building fullstack applications using Angular, Vue, NestJS, TypeOrm and Postgresql. Passionate learner and travaler. Professionally, I am learning graphql, nestJS and prismia and would love to build an API with this stack. While not working, I stare at my phone to learn Spanish and Portuguese on Duolingo app.`,
        }
    }
}
