import { useAuthData } from '@deriv-com/api-hooks'
import { Button } from '@deriv-com/ui'
import { URLUtils } from '@deriv-com/utils'
import {
    SubBrandDerivPartnersBrandLightIcon,
    LegacyLogout1pxIcon,
    IllustrativeSupport247Icon,
} from '@deriv/quill-icons'

export const Header = () => {
    const { isAuthorized, activeLoginid, logout } = useAuthData()
    const { getOauthURL, getDerivStaticURL } = URLUtils

    return (
        <header className="border-solid border-b-1 border-b-system-light-hover-background flex px-20 sticky top-0 bg-system-light-primary-background z-50 py-10">
            <div className="flex justify-between items-center w-full">
                <a
                    onClick={() => {
                        window.location.href = getDerivStaticURL('')
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <SubBrandDerivPartnersBrandLightIcon />
                    </div>
                </a>
                {!(isAuthorized || activeLoginid) ? (
                    <div className="flex gap-6">
                        <Button
                            size="sm"
                            variant="outlined"
                            color="black"
                            onClick={() => {
                                window.location.href = getOauthURL()
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => {
                                window.location.href =
                                    getDerivStaticURL('signup')
                            }}
                        >
                            Sign Up
                        </Button>
                    </div>
                ) : (
                    <div className="flex gap-30">
                        <div className="flex cursor-pointer">
                            <IllustrativeSupport247Icon width={25} />
                        </div>
                        <div className="flex cursor-pointer" onClick={logout}>
                            <LegacyLogout1pxIcon width={22} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
