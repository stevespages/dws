:doc:`Home </index>` | :doc:`Linux <../index>` 

Debian Package Management
=========================

dpkg (Debian Package) is Debian's core package manager. It installs, removes and provides information about .deb packages. The dpkg database of packages is located at /var/lib/dpkg/status. This file does not contain information on repositories.

APT (Advanced Package Tool) uses dpkg to perform actions on individual .deb packages. It additionally manages relations between packages (especially dependencies) and source and versioning decisions.

To install a package use apt-get install package-name. For example: sudo apt-get install libc6 would be used even though the fully qualified filename for this package may be libc6_1.9.6-2.deb. Dependent packages will also be installed if necessary. A location configuration file (/etc/apt/sources.list) determines where apt will get the package from. Locations can be local or remote. The behaviour of apt can be modified using options when the command is run or by an apt_preferences mechanism.

``apt-get update`` synchronizes the package index from their sources.

``apt-get upgrade`` installs the newest versions of all currently installed packages. A package is not upgraded if that would change the install status of another package.
