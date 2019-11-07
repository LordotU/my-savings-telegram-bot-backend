import * as dotenv from 'dotenv'
import * as Joi from '@hapi/joi'

export type EnvConfig = Record<string, string>

export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor(path: string) {
    dotenv.config({ path })
    this.envConfig = this.validateInput(process.env)
  }

  get(key: string): string | undefined {
    return this.envConfig[key]
  }

  getAll(): EnvConfig {
    return this.envConfig
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      BACKEND_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default(process.env.NODE_ENV || 'development'),

      BACKEND_PORT: Joi.number().default(3000),

      BACKEND_AUTH_TOKEN: Joi.string()
        .length(16)
        .required(),

      BACKEND_MONGODB_URI: Joi.string()
        .uri({ scheme: 'mongodb' })
        .required(),
    })

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
      {
        allowUnknown: true,
        stripUnknown: true,
      },
    )

    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }

    return validatedEnvConfig
  }
}
